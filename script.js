// hairstyle and age option control variables

const hairstyleBtnOne = document.getElementById("hairstyle-one");
const hairstyleBtnTwo = document.getElementById("hairstyle-two");
const kidBtn = document.getElementById("kid");
const adultBtn = document.getElementById("adult");
const cancelHair = document.getElementById("cancel-hair-choice");
const cancelAge = document.getElementById("cancel-age-choice");
const newCancelHairBtn = document.getElementsByClassName('hairstyle-options');

// form control variables

const url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeSDKe_1RZ3C51sj9q0sKkxkF6Mr5LB7zyd7m8TQzro3Si7A/formResponse";
const submit = document.getElementById("submit");
const form = document.querySelector("form");
const hairstyle = document.getElementById("hairstyle-choice");
const age = document.getElementById("age-choice");

// hairstyle & age arrays

const hairstyles = ['hairstyle1', 'hairstyle2'];
const ages = ['kid', 'adult'];

// button and data transfer functions 

function hairChoiceOne() {
    hairstyle.value = `${hairstyles[0]}`;
    hairstyleBtnOne.disabled = true;
    hairstyleBtnTwo.disabled = true;
}
function hairChoiceTwo() {
    hairstyle.value = `${hairstyles[1]}`;
    hairstyleBtnOne.disabled = true;
    hairstyleBtnTwo.disabled = true;
}
function ageChoiceOne() {
    age.value = `${ages[0]}`;
    kidBtn.disabled = true;
    adultBtn.disabled = true;

}
function ageChoiceTwo() {
    age.value = `${ages[1]}`;
    kidBtn.disabled = true;
    adultBtn.disabled = true;
}

// form submission algorithm
form.addEventListener('submit', e => {
    e.preventDefault();
    submit.disabled = true;
    submit.innerHTML = "Submitting...";
    console.log(form);
    fetch(url, { mode: 'no-cors', method: 'POST', body: new FormData(form)})
    .then(response => { 
        submit.disabled = false;
        kidBtn.disabled = false;
        adultBtn.disabled = false;
        hairstyleBtnOne.disabled = false;
        hairstyleBtnTwo.disabled = false;
        submit.innerHTML = "Submit";
        form.reset();
        alert('Thank you, we will be in touch with you shortly!', response)})
    .catch(error => alert('Error!', error.message))
});

// all click events

hairstyleBtnOne.addEventListener('click', hairChoiceOne);
hairstyleBtnTwo.addEventListener('click', hairChoiceTwo);
kidBtn.addEventListener('click', ageChoiceOne);
adultBtn.addEventListener('click', ageChoiceTwo);

