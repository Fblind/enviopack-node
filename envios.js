module.exports = (client, apiKey, secretKey) => {
  return {
    // POST /pedidos
    // envioPack.envios.create()
    async create(body = {}) {
      const {data} = await client.post("/envios", body, {params: {}});
      return data;
    },
    async get(id, query = {}) {
      const {data} = await client.get(`/envios/${id}`, {params: query});
      return data;
    },
    etiqueta: {
      async get(id, query = {}) {
        const {data} = await client.get(`/envios/${id}/etiqueta`, {params: query, responseType: "stream"});
        return data;
      }
    }
  }
}
