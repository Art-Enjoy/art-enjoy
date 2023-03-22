import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7132',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const productService = {
    async getProducts() {
        let response = await apiClient.get("/Product");
        if (!response==200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let allProducts = response.data;

        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/Product" + id);
        if (!response==200)
        throw {
            status: response.status,
            statusText: "Not found",
        };
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct){
        await apiClient.post("/Product", newProduct)
    },
    async deleteProduct(id){
        await apiClient.delete("/Product" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/Product" + id, updatedProduct)
    }
}

