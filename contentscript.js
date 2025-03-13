const productContainers = [...document.querySelectorAll('.product-container')];

const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

for (let i = 0; i < productContainers.length; i++) {
    let item = productContainers[i];
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft += containerWidth;
    });
   
    preBtn[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
    });
}
