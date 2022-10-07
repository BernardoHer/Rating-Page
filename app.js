let btnContainer = document.querySelector('.btns-section');
let rateNumber = document.querySelector('.thanks-section-user-select');
let submitBtn = document.querySelector('.submit-button');
let ratingSection =  document.querySelector('rating-section');
let thanksSection = document.querySelector('.thanks-section');

btnContainer.addEventListener('click', event =>{
    let btnSelected = event.target.innerText;
    rateNumber.innerText = btnSelected;
    if(btnSelected >0 || btnSelected <=5){
        submitBtn.addEventListener('click',()=>{
            ratingSection.style.display = 'none';
            thanksSection.style.display = 'flex';
        })
    }
})