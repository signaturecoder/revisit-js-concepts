const acEle = document.querySelectorAll('.accordion');
const acTitleEle = document.querySelectorAll('.accordion-title');
const acContentEle = document.querySelectorAll('.accordion-content');
const acIconEle = document.querySelectorAll('.accordion-icon');

let noOfTitleClick = 0;
acTitleEle.forEach((item, index) => {
    item.addEventListener('click', function toggleContent(){
        ++noOfTitleClick;
        if(noOfTitleClick % 2 !== 0) {
            acContentEle[index].classList.add('accordion-content--show');
            acIconEle[index].classList.add('accordion-icon--rotated');
        } else {
            acContentEle[index].classList.remove('accordion-content--show');
            acIconEle[index].classList.remove('accordion-icon--rotated');
        }
    });
})
