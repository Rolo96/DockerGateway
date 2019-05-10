//import modules
import { request as sendRequest } from "graphql-request"

//global variables
const uri = "http://pythondocker:5000/graphql"

export const GetProducts = function(request, response) {
    let query = ""
    if (request.query.code) {
        const { code } = request.query
        query = `query{ GetProducts(code: ${code} ){ code name cost amount }}`
    } else {
        query = `query{ GetProducts{ code name cost amount }}`
    }
    return sendRequest(uri, query)
        .then(response => {
            return response
        })
        .catch(error => {
            return response.response(error.response).code(409)
        })
}

export const CreateProduct = function(request, response) {
    const { name, code, amount, cost } = request.payload
    const product = `code:${code},name:"${name}",amount:${amount},
    cost:${cost}`
    let query = `mutation{ createProduct(${product}){ product { id } }}`
    return sendRequest(uri, query)
        .then(() => {
            return response.response({info:"created"})
        })
        .catch(error => {
            console.log(error)
            return response.response(error).code(409)
        })
}

export const UpdateProduct = function(request, response) {
    const { code, name, cost } = request.payload
    const product = `code:${code},name:"${name}",cost:${cost}`
    let query = `mutation{ updateProductCost(${product}){ product { id } }}`
    return sendRequest(uri, query)
        .then( () => {
            return response.response({info:"updated"})
        })
        .catch(error => {
            return response.response(error.response).code(409)
        })
}

export const DeleteProduct = function(request, response) {
    const { code } = request.query
    let query = `mutation{ deleteProduct(code:${code}){ product { id } }}`
    return sendRequest(uri, query)
        .then( () => {
            return response.response({info:"deleted"})
        })
        .catch(error => {
            return response.response(error.response).code(409)
        })
}

