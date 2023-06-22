import {deleteProduct} from "../functions.js";
import { thumbnailsContainer } from "../selectors.js";

class UI {
    showImage(image, imageContainer) {
        let clonedImage;

        imageContainer.querySelector(".actual__image").remove();

        clonedImage = image.cloneNode(true);

        clonedImage.className = "actual__image";

        imageContainer.appendChild(clonedImage);
    }

    showMenu() {
        document.querySelector(".filter").classList.add("active");
        document.querySelector(".header__nav").classList.add("active");
    }

    closeMenu() {
        document.querySelector(".filter").classList.remove("active");
        document.querySelector(".header__nav").classList.remove("active");
    }

    showCart() {
        document.querySelector("#cart").classList.toggle("active");
    }

    addProductsCart({products}) {
        const productsContainer = document.querySelector("#cart-products");

        this.cleanCart();

        if(products.length > 0) {
            document.querySelector(".cart__empty").classList.remove("active");
            document.querySelector("#checkout").classList.add("active");
        } else {
            document.querySelector(".cart__empty").classList.add("active");
            document.querySelector("#checkout").classList.remove("active");
        }

        products.forEach(product => {
            const {id, title, unitPrice, amount, totalPrice} = product;

            const item = document.createElement("DIV");

            item.className = "product__item flex";
            item.innerHTML = `
            <div class="item__thumbnail">
                    <img src="images/image-product-1-thumbnail.jpg" alt="product-thumbnail">
                </div>
                <div class="item__info flex">
                    <span class="item__title">${title}</span>
                    <div class="item__price">
                    <span class="price__unit">${unitPrice}</span>
                    x 
                    <span class="item__amount">${amount}</span>
                    <span class="price__total">$${totalPrice}.00</span>
                    </div>
                </div>
            `

            const deleteProductBtn = document.createElement("BUTTON");
            deleteProductBtn.className = "product__delete";
            deleteProductBtn.innerHTML = `
                <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>`
            item.appendChild(deleteProductBtn);
            deleteProductBtn.onclick = () => deleteProduct(id);

            productsContainer.appendChild(item);
        });
    }

    activeThumbnail(thumbnail) {
        console.log(thumbnailsContainer);
        thumbnailsContainer.querySelector(".active").classList.remove("active");
        thumbnail.classList.add("active");
    }

    showFilter() {
        document.querySelector(".filter").classList.add("active");
    }

    quitFilter() {
        document.querySelector(".filter").classList.remove("active");
    }

    showLightbox() {
        document.querySelector("#lightbox").classList.add("active");
    }

    closeLightbox() {
        document.querySelector("#lightbox").classList.remove("active");
    }

    cleanCart() {
        const productsContainer = document.querySelector("#cart-products");
        while(productsContainer.firstChild) {
            productsContainer.removeChild(productsContainer.firstChild);
        }
    }
}

export default UI;