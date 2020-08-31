'use strict'
let nojs = document.querySelector('.nojs');
let packages = document.querySelectorAll('.product-pack');
let productBuy;

nojs.classList.remove('nojs');

for(let pack of packages) {
    let checkbox = pack.parentNode.parentNode.querySelector('.product-card__toggler');
    productBuy = pack.parentNode.parentNode.querySelector('.product-card__buy');
    productBuy.onclick = function () {
        setTimeout(function() {
            changeMessage(checkbox, pack);
        }, 10);
    }
    changeMessage(checkbox, pack);
    pack.onmouseleave = function() {
        delayHover(checkbox, this);
    }
    pack.onclick = function () {
        setTimeout(function() {
            changeMessage(checkbox, pack);
        }, 10);
    }
    productBuy.onclick = function () {
        setTimeout(function() {
            changeMessage(checkbox, pack);
        }, 10);
    }
    pack.onmouseover = function() {
        changeMessageHover(pack);
    };
}

function delayHover(checkbox, element) {
    if(checkbox.checked) {
        element.classList.add('product-pack--selected');
    }
    if(!checkbox.checked) {
        element.classList.remove('product-pack--selected');
    }
}

function changeMessage(checkbox, element) {
    let description = element.parentNode.parentNode.querySelector('.product-card__description--text');
    let descriptionBuy = element.parentNode.parentNode.querySelector('.product-card__description--buy');
    let productName = element.querySelector('.product-pack__name').textContent;
    if(checkbox.disabled) {
        descriptionBuy.style.display = 'none';
        description.style.display = 'block';
        description.textContent = `Печалька, ${productName} закончился.`;
        description.style.color = '#ffff66';
    }
    if(checkbox.checked) {
        descriptionBuy.style.display = 'none';
        description.style.display = 'block';
        description.textContent = description.dataset.description;
    }
    if(!checkbox.checked && !checkbox.disabled) {
        descriptionBuy.style.display = 'block';
        description.style.display = 'none';
    }
}

function changeMessageHover (element) {
    let slogan = element.querySelector('.product-pack__slogan--default');
    let sloganHover = element.querySelector('.product-pack__slogan--hover');
    if(element.classList.contains('product-pack--selected')) {
        slogan.style.display = 'none';
        sloganHover.style.display = 'block';
        element.onmouseout = function() {
            slogan.style.display = 'block';
            sloganHover.style.display = 'none';
        }
    }
}
