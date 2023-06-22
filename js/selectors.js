export let nextImageBtn;
export let previousImageBtn;
export let imageContainer;
export const closeLightboxBtn = document.querySelector("#close-lightbox");
export const images = Array.from(document.querySelectorAll(".product__rest-images img"));
export const showMenuBtn = document.querySelector(".header__nav-btn.open");
export const closeMenuBtn = document.querySelector(".header__nav-btn.close");
export const showCartBtn =  document.querySelector(".header__cart-btn");
export const addProductBtn = document.querySelector("#product-add");
export const quitProductBtn = document.querySelector("#product-quit");
export const productAmount = document.querySelector(".product__amount");
export const addToCartBtn = document.querySelector("#add-to-cart");
export const product = document.querySelector("#product");
export const showLightboxBtn = document.querySelector("#show-lightbox");
export let thumbnailsContainer;

export function initializeImageButtons(container) {
    nextImageBtn = container.querySelector(".image__next");
    previousImageBtn = container.querySelector(".image__previous");

    thumbnailsContainer = container.querySelector(".product__thumbnails");

    imageContainer = container.querySelector(".product__actual-image");
}