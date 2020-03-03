module.exports = (client, apiKey, secretKey) => {
  return {
    // GET /correos
    // envioPack.correos.all({query})
    async all(query = {}) {
      const {data} = await client.get("/correos", {params: query});
      return data;
    },
    // GET /correos/{id}
    // envioPack.correos.get({query})
    async get(id, query = {}) {
      const {data} = await client.get(`/correos/${id}`, {params: query});
      return data;
    }
  }
}
