const quantityControl = document.querySelectorAll(".product__quantity-control");
const currentProducts = document.querySelectorAll(".product__add")
const carts = document.querySelector(".cart__products");


quantityControl.forEach((el) => {
    el.addEventListener("click", (e) => {
        const targetCount = e.target.closest(".product__quantity-controls"); 
        let targetValue = targetCount.querySelector(".product__quantity-value");
        
        if (targetValue.textContent >= 2 && e.target.classList.contains("product__quantity-control_dec")) {
           --targetValue.textContent;
        }
        if (e.target.classList.contains("product__quantity-control_inc")) {
             ++targetValue.textContent; 
        }
    }); 
});

currentProducts.forEach((el) => {
    el.addEventListener("click", (e) => {
        const targetProduct = e.target.closest(".product");
        let addedProduct = targetProduct.cloneNode(false);
        addedProduct.className = "cart__product";

        const imgTargetProduct = targetProduct.querySelector(".product__image");
        let addedProductImage = imgTargetProduct.cloneNode(false);
        addedProductImage.className = "cart__product-image";

        const targetProductCount = targetProduct.querySelector(".product__quantity-value");
        let addedProductCount = targetProductCount.cloneNode(false);
        addedProductCount.className = "cart__product-count";

        const cart = document.querySelectorAll(".cart__product");
        const idProducts = [];
        
        cart.forEach((elem) => {
            let idProduct = elem.getAttribute("data-id");
            idProducts.push(idProduct);
        });
        

        if (!idProducts.includes(targetProduct.getAttribute("data-id"))) {
            carts.appendChild(addedProduct);
            addedProduct.appendChild(addedProductImage);
            addedProduct.appendChild(addedProductCount);
            addedProductCount.textContent = targetProductCount.textContent;
        } else {
            cart.forEach((item) => {
                if (item.getAttribute("data-id") === targetProduct.getAttribute("data-id")) {
                    item.lastChild.textContent =  Number(item.lastChild.textContent) + Number(targetProductCount.textContent);
                }
            });
        }
    });
});