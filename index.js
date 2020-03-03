const axios = require("axios");
const auth = require("./auth");

class EnvioPack {
  constructor(apiKey, secretKey, logger = console, _axios = axios) {
    this.apiKey = apiKey;
    this.secretKey = secretKey;
    this.logger = logger;
    this.access_token = null;
    this.baseUrl = "https://api.enviopack.com/";
    this.transport = _axios.create({
      baseURL: this.baseUrl,
      headers: {"Accept": "application/json"}
    });
    this.initializeTransport();

    this.client = this.wrapClient(this.transport)

    this.cotizar = require("./cotizar")(this.client, this.apiKey, this.secretKey);
    this.sucursales = require("./sucursales")(this.client, this.apiKey, this.secretKey);
    this.localidades = require("./localidades")(this.client, this.apiKey, this.secretKey);
    this.pedidos = require("./pedidos")(this.client, this.apiKey, this.secretKey);
    this.envios = require("./envios")(this.client, this.apiKey, this.secretKey);
    this.correos = require("./correos")(this.client, this.apiKey, this.secretKey);
    this.provincias = require("./provincias")(this.client, this.apiKey, this.secretKey);
  }

  initializeTransport() {
    this.transport.interceptors.request.use((config) => {
      if (this.access_token) {
        if (!config.params) {
          config.params = {};
        }
        config.params["access_token"] = this.access_token;
      }
      return config;
    });
  }

  updateAccessToken(access_token) {
    this.access_token = access_token;
  }

  wrapClient(axiosClient) {
    const self = this;
    async function handleError(error, method, ...args) {
      if (error.response && error.response.data && error.response.data.code === 401) {
        self.logger.log("Authentication error, we should regenerate the access_token");
        const access_token = await auth.create(axiosClient, self.apiKey, self.secretKey);
        self.updateAccessToken(access_token);
        if (args[1].params) {
          args[1].params["access_token"] = access_token;
        } else {
          args[2].params["access_token"] = access_token;
        }
        return await method(...args);
      }
      self.logger.log("Error not handled");
      self.logger.log(error);
      throw error;
    }

    function wrapMethod(methodName) {
      return async (...args) => {
        const method = axiosClient[methodName];
        try {
          return await method(...args);
        } catch (error) {
          return await handleError(error, method, ...args);
        }
      }
    }

    return {
      ...axiosClient,
      get: wrapMethod("get"),
      post: wrapMethod("post"),
    }
  }
}

module.exports = EnvioPack;
