import {
    nextImageBtn,
    previousImageBtn,
    showMenuBtn,
    closeMenuBtn,
    showCartBtn,
    addProductBtn,
    quitProductBtn,
    addToCartBtn,
    showLightboxBtn,
    closeLightboxBtn,
    initializeImageButtons,
    thumbnailsContainer,
    } from "../selectors.js";

import { nextImage, previousImage, addProduct, quitProduct, addToCart, showLightbox, closeLightbox, changeImage } from "../functions.js";
import UI from "./UI.js"

const ui = new UI();

class App{
    constructor() {
        this.initApp();
    }

    initApp() {
        initializeImageButtons(document.querySelector("#product-images"));

        nextImageBtn.addEventListener("click", nextImage);
        previousImageBtn.addEventListener("click", previousImage);
        showMenuBtn.addEventListener("click", ui.showMenu);
        closeMenuBtn.addEventListener("click", ui.closeMenu);
        showCartBtn.addEventListener("click", ui.showCart);
        addProductBtn.addEventListener("click", addProduct);
        quitProductBtn.addEventListener("click", quitProduct);
        addToCartBtn.addEventListener("click", addToCart);
        showLightboxBtn.addEventListener("click", showLightbox);
        closeLightboxBtn.addEventListener("click", closeLightbox);
        thumbnailsContainer.addEventListener("click", changeImage);
    }
}

export default App;