import App from "../App";
import axios from "axios";

const API_URL= "http://localhost:8080"

class ProductService{
    saveProduct(products){
        return axios.post(API_URL+"/saveProduct", products)
    }

    getAllProduct(){
        return axios.get(API_URL+"/");

    }
    getAllProductById(id){
        return axios.get(API_URL+"/"+id);  
    }

    deleteProduct(id){
        return axios.get(API_URL+"/deleteProduct/"+id);

    }

    editProduct(products){
        return axios.post(API_URL+"/"+products.id,products);
    }

}

export default new ProductService;