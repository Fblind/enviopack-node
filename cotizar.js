module.exports = (client, apiKey, secretKey) => {
  return {
    costo: {
      // GET /cotizar/costo
      // envioPack.cotizar.costo.all(query)
      async all(query = {}) {
        const {data} = await client.get("/cotizar/costo", {params: query});
        return data;
      }
    },
    precio: {
      aDomicilio: {
        // GET /cotizar/precio/a-domicilio
        // envioPack.cotizar.precio.aDomicilio.all(query)
        async all(query) {
          const {data} = await client.get("/cotizar/precio/a-domicilio", {params: query});
          return data;
        },
      },
      aSucursal: {
        // GET /cotizar/precio/a-sucursal
        // envioPack.cotizar.precio.aSucursal.all(query)
        async all(query) {
          const {data} = await client.get("/cotizar/precio/a-sucursal", {params: query});
          return data;
        }
      }
    }
  }
}
