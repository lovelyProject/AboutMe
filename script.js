'use strict';
let accordionList = document.querySelectorAll('.accordion');

for (let elem of accordionList){
    elem.addEventListener('click', function(){
        this.nextElementSibling.classList.toggle('active-accordion');
        
    })
}

let sliderContainer = document.querySelector('.slider-container');
let sliderList = sliderContainer.querySelectorAll('.test');
let next = document.querySelector('.action-next');
let prev = document.querySelector('.action-prev');

next.addEventListener('click',nextStep);
prev.addEventListener('click',prevStep);
//Следующий слайд
function nextStep(){
    let activeSlide;
    let nextSlide;

    for (let i = 0; i < sliderList.length; i++){

         if (sliderList[i].classList.contains('slide-active')){
            
            activeSlide = sliderList[i];
            //Определяем следующий слайд
            check(i);
            break;
         }

    }
    activeSlide.classList.remove('slide-active');
    nextSlide.classList.add('slide-active');

    function check(counter){
        if (sliderList[counter+1]){
            nextSlide = sliderList[counter + 1];

        } else {
            nextSlide = sliderList[0];
        }
    }
}
//Предыдущий слайд
function prevStep(){
    let activeSlide;
    let prevSlide;

    for (let i = 0; i < sliderList.length; i++){

         if (sliderList[i].classList.contains('slide-active')){
            
            activeSlide = sliderList[i];
            //Определяем следующий слайд
            check(i);
            break;
         }

    }
    activeSlide.classList.remove('slide-active');
    prevSlide.classList.add('slide-active');
    

    function check(counter){
        if (sliderList[counter - 1]){
            prevSlide = sliderList[counter - 1];

        } else {
            prevSlide = sliderList[sliderList.length - 1];
        }
    }
}

//Добавление комментария
const commentContainer = document.querySelector('#comment-container');
const commentTitleInput = commentContainer.querySelector('#comment-title');
const commentTextInput = commentContainer.querySelector('#text-area');
const allCommentsContainer = commentContainer.querySelector('.com-text');
const newComment = commentContainer.querySelector('.submited-coms');
const submitButton = commentContainer.querySelector('#submit')

submitButton.addEventListener('click',function(){

    if(commentTextInput.value && commentTitleInput.value){
        
            // копирование структуры комментария
            let clone = newComment.cloneNode(true);
            
            
            clone.querySelector('h4').textContent = commentTitleInput.value.slice(0,1).toUpperCase() + commentTitleInput.value.slice(1);
            clone.querySelector('p').textContent = commentTextInput.value.slice(0,1).toUpperCase() + commentTextInput.value.slice(1);

            allCommentsContainer.appendChild(clone);

            commentTextInput.value = '';
            commentTitleInput.value = '';
            commentTextInput.blur();
        

    } else{
        alert('Заполните все поля');
    }
})

