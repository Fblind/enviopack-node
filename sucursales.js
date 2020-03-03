module.exports = (client, apiKey, secretKey) => {
  return {
    // GET /sucursales
    // envioPack.sucursales.all({query})
    async all(query = {}) {
      const {data} = await client.get("/sucursales", {params: query});
      return data;
    },
    // GET /sucursales
    // envioPack.sucursales.get({query})
    async get(id, query = {}) {
      const {data} = await client.get(`/sucursales/${id}`, {params: query});
      return data;
    }
  }
}
