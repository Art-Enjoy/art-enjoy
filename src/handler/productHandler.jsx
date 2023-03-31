import { productService } from "../service/productService";


export const productHandler = {
     addProduct(newProduct){
       /*  if (!newProduct) {
            return;
        }  */
        let imgStringData = newProduct.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];
        let imgExtension = file[0].split(';')[0].split(':')[1];
       
       
        let newProductStructure = { 
            "product": {
            "id": "",
            "title": newProduct.title,
            "price": newProduct.price,
            "description": newProduct.description,
            "units": newProduct.units,
             "location": newProduct.location,
             //"img": newProduct.img
        },
        "base64FileModel": {
            "fileName": newProduct.title + "-Photo",
            "base64FileContent": imgContent,
            "extension": imgExtension
        }
    }
console.log  (newProductStructure)
        return  productService.submitProduct(newProductStructure);
        
    },

    loadProducts(){
        return productService.getProducts();
    },
    loadProduct(id) {
        return productService.getProduct(id);
    },
    deleteProduct(id){
        return productService.deleteProduct(id);
    },
    updateProduct(id, updatedProduct){
        if(!updatedProduct){
            return;
        }
        let updatedProductStructure = {
            "title": updatedProduct.title,
            "price": updatedProduct.price,
            "description": updatedProduct.description,
            "units": updatedProduct.units,
            
            "location": updatedProduct.location,
           "img" : updatedProduct.img,
        }
       

        return productService.updateProduct(id, updatedProductStructure);
    }
}

