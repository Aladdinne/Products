import axios from "axios";

const BASE_API_URL = "http://localhost:1112/api/products";

class ProduitService {
    saveProduit(produit) {
        return axios.post(BASE_API_URL + "/createProduct", produit); // Use 'produit' instead of 'this.emp'
    }

    getProduits() {
        return axios.get(BASE_API_URL + "Products");
    }
}

export default new ProduitService();
