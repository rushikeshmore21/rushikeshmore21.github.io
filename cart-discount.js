let cartItem__countnote = document.querySelectorAll('.checkout-section-header-text')[0].innerText;
let discount_div = document.querySelector('.order-discounts[data-v-3723b14f]');
let coupon__code_input = document.querySelector("input[placeholder = 'Add coupon or gift card']");
let discountWillApply = false;

function isDiscountApply() {
    let count_cart = parseInt(cartItem__countnote.match(/\d+/)[0], 10);
    if (count_cart >= 12) {
        document.querySelector('#discount-note').innerHTML = '';
        discountWillApply = true;
        discount_div.insertAdjacentHTML('beforeend', '<div id="discount-note" style="line-height:1.6">🎉 You are eligible for special discount - <b>10DISCOUNT</b></div>');
    } else {
        discountWillApply = false;
        console.warn('not');
        document.querySelector('#discount-note').innerHTML = '';
    }
}

var element = document.querySelectorAll('.checkout-section-header-text')[0];
element.addEventListener('DOMSubtreeModified', myFunction);
function myFunction(e) {
    isDiscountApply();
}
