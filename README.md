**Under development**

## Cómo usarlo ?

### Instanciar el cliente
``` node
const EnvioPack = require("enviopack-node");
const envioPack = new EnvioPack('API_KEY', 'SECRET_KEY');
```

### API
Por el momento el cliente expone estos objetos:
* correos
* cotizar
* envios
* localidades
* pedidos
* provincias
* sucursales

y también un objeto client expone un cliente de axios.

La mayoría de los objetos tienen los siguientes metodos:
- all({ query }): Returns all resources
- get(id, { query }): Returns one resource
- update(id, { query }): Returns one resource
- create({ body }): Creates a new resource

Y los endpoints que tienen subrecursos se acceden mediante objetos anidados con los nombres de los subrecursos en camelCase, por ejemplo:
```
GET /cotizar/precio/a-sucursal
envioPack.cotizar.precio.aSucursal.all(query)
```
