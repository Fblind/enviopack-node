module.exports = (client, apiKey, secretKey) => {
  return {
    // GET /provincias
    // envioPack.provincias.all({query})
    async all(query = {}) {
      const {data} = await client.get("/provincias", {params: query});
      return data;
    },
    // GET /provincias/{id}
    // envioPack.provincias.get({query})
    async get(id, query = {}) {
      const {data} = await client.get(`/provincias/${id}`, {params: query});
      return data;
    }
  }
}
