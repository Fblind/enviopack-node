const querystring = require("querystring");

module.exports = {
  async create(client, apiKey, secretKey) {
    const {data: {token}} = await client.post("/auth", querystring.stringify({
      "api-key": apiKey,
      "secret-key": secretKey
    }));
    return token;
  }
}
