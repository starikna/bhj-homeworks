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
        const targetId = targetProduct.getAttribute("data-id");
        const targetImage = targetProduct.querySelector(".product__image").getAttribute("src");
        let targetCount = +targetProduct.querySelector(".product__quantity-value").textContent;
        const addedProduct = document.createElement("div");
        const innerText = `<div class="cart__product" data-id="${targetId}"><img class="cart__product-image" src="${targetImage}"><div class="cart__product-count">${targetCount}</div></div>`;

        if (!Array.from(carts.children).find(item => item.getAttribute("data-id") === targetId)) {
            carts.appendChild(addedProduct);
            addedProduct.outerHTML = innerText;
        } else {
            let count = Array.from(carts.children).find(item => item.getAttribute("data-id") === targetId);
            let countInCart = targetCount + +count.querySelector(".cart__product-count").textContent;
            count.querySelector(".cart__product-count").textContent = countInCart;
        }
    });
});