const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


const openPopUp2 = document.getElementById('open_modal');
const closePopUp2 = document.getElementById('modal_close');
const popUp2 = document.getElementById('modal');
console.log(openPopUp2);
openPopUp2.addEventListener('click', function(e) {
    e.preventDefault();
    popUp2.classList.add('active');
})

closePopUp2.addEventListener('click', () => {
    popUp2.classList.remove('active');
})