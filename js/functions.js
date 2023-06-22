import { images, productAmount, product, nextImageBtn, previousImageBtn, initializeImageButtons, thumbnailsContainer, imageContainer } from "./selectors.js";
import Products from "./classes/Products.js";
import UI from "./classes/UI.js";

const products = new Products();
const ui = new UI();

let indexImage = 0;

// Functions
export function nextImage() {
    indexImage = (indexImage == 3 ? 0 : indexImage + 1);

    ui.showImage(images[indexImage], imageContainer);

    ui.activeThumbnail(thumbnailsContainer.children[indexImage]);
}

export function previousImage() {
    indexImage = (indexImage == 0 ? 3 : indexImage - 1);

    ui.showImage(images[indexImage], imageContainer);

    ui.activeThumbnail(thumbnailsContainer.children[indexImage]);
}

export function addProduct() {
    productAmount.textContent++;
}

export function quitProduct() {
    productAmount.textContent = (productAmount.textContent == 0 ? 0 : productAmount.textContent - 1);
}

export function addToCart() {
    const productInfo = {
        id: Date.now(),
        title: product.querySelector("#product-title").textContent,
        unitPrice: product.querySelector("#product-price").textContent,
        amount: product.querySelector("#product-amount").textContent,
    }

    productInfo.totalPrice = productInfo.amount * productInfo.unitPrice.slice(1);

    products.addProduct({...productInfo});
    ui.addProductsCart(products);
}

export function deleteProduct(id) {
    products.deleteProduct(id);

    ui.addProductsCart(products);
}

export function showLightbox() {
    indexImage = 0;

    ui.showFilter();
    ui.showLightbox();

    initializeImageButtons(document.querySelector("#lightbox"));

    nextImageBtn.addEventListener("click", nextImage);
    previousImageBtn.addEventListener("click", previousImage);
    thumbnailsContainer.addEventListener("click", changeImage);
}

export function closeLightbox() {
    ui.quitFilter();
    ui.closeLightbox();

    initializeImageButtons(document.querySelector("#product-images"));

    nextImageBtn.addEventListener("click", nextImage);
    previousImageBtn.addEventListener("click", previousImage);
    thumbnailsContainer.addEventListener("click", changeImage);
}

export function changeImage(e) {
    if (e.target.classList.contains("thumbnail")) {
        ui.activeThumbnail(e.target);

        indexImage = parseInt(e.target.dataset.index);

        ui.showImage(images[indexImage], imageContainer);
    }
}
