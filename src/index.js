//import modules
import Hapi from "hapi"

//local imports
import OrdersRoute from "./api/v1/orders"
import UsersRoute from "./api/v1/users"
import ProductsRoute from "./api/v1/products"

// Create a server with a host and port
const server = Hapi.server({
    host: "0.0.0.0",
    port: 8086
})
//set the apis to the server
OrdersRoute(server)
UsersRoute(server)
ProductsRoute(server)

// Add the default route
server.route({
    method: "GET",
    path: "/",
    handler: function() {
        return "<h1>Welcome to CompraTEC</h1>"
    }
})

// Start the server
const start = async function() {
    try {
        console.log("starting server")
        await server.start()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    console.log("Server running at:", server.info.uri)
}

start()
