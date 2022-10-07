let btnContainer = document.querySelector('.btns-section');
let rateNumber = document.querySelector('.thanks-section-user-select');
let submitBtn = document.querySelector('.submit-button');
let ratingSection =document.querySelector('.rating-section');
let thanksSection = document.querySelector('.thanks-section');




btnContainer.addEventListener('click',event=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected>0 || numberSelected <=5 ){
        submitBtn.addEventListener('click', ()=>{
            ratingSection.style.display = 'none';
            thanksSection.style.display = 'flex';
        
        });

    }
})
