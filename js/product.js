let productImages = document.querySelectorAll(".product-images img"); 
console.log(productImages);
let productImageSlide = document.querySelector("#imageholder"); 
console.log(productImageSlide);

let activeImageSlide = 0; 
// console.log("hello")

productImages.forEach((item, i) => { 
    // console.log("hello");
    item.addEventListener('click', () => { 
        // console.log("hello2");
        productImages[activeImageSlide].classList.remove('active'); 
        item.classList.add('active'); 
        // console.log(`${item.src}`)
        productImageSlide.style.backgroundImage = `url("${item.src}")`; 
        // productImageSlide.style.backgroundImage = ""; 
        activeImageSlide = i; 
    })
})

const sizeBtns = document.querySelectorAll('.size-radio-btn'); 
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => { 
        sizeBtns[checkedBtn].classList.remove('check'); 
        item.classList.add('check'); 
        checkedBtn = i; 
    })
})