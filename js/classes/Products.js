class Products {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products = [...this.products, product];
    }

    deleteProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
}

export default Products;