module.exports = (client, apiKey, secretKey) => {
  return {
    // POST /pedidos
    // envioPack.pedidos.create()
    async create(body = {}) {
      const {data} = await client.post("/pedidos", body, {params: {}});
      return data;
    },
  }
}
