**Under development**

# Obtener el costo que abona el vendedor por el envío
GET /cotizar/costo
envioPack.cotizar.costo.all(query)

# Obtener el precio que abona el comprador por el envío a domicilio
GET /cotizar/precio/a-domicilio
envioPack.cotizar.precio.aDomicilio.all(query)

# Obtener el precio que abona el comprador por el envío a una sucursal
GET /cotizar/precio/a-sucursal
envioPack.cotizar.precio.aSucursal.all(query)


function all({ token }): Returns all resources
function get({ token, id }): Returns one resource
function create({ token, resources }): Creates a new resources
function remove({ token, id }): Remove the resource

You can also use envioPack.client and is a basic axios instance
