const btnEl = document.querySelector('button');
const displayMsg = document.querySelector('.display-msg');
const inputEl = document.querySelector('input');
const formEl = document.querySelector('form');
const errEl = document.querySelector('.err-msg');

errEl.style.display = " none";

formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputEl.value == "") {
        errEl.style.display = "block";
        setTimeout(() => {
            errEl.style.display = "none";
        }, 1000)
    } else {
        displayMsg.textContent = inputEl.value;
        inputEl.value = "";
    }
})











