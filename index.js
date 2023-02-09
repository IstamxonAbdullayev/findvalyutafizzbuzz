let elForm = document.querySelector(".js-form-fizzbuzz");
let elInput = document.querySelector(".js-input-fizzbuzz");
let elAlert = document.querySelector(".js-result-fizzbuzz");

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let inputValue = elInput.value;
    var newStr = "";
    if (inputValue % 3 == 0) {
        newStr += "Fizz";
    };
    if (inputValue % 5 == 0) {
        newStr += "Buzz";
    };
    elAlert.textContent = newStr || `${inputValue} soni 3 ga ham 5 ga ham bo'linmaydi`;
    
})


let elFormCurrency = document.querySelector(".js-form-currency");
let elInputCurrency = document.querySelector(".js-input-currency");
let elSelectCurrency = document.querySelector(".js-select-currency");
let elResultText = document.querySelector(".js-result");

elFormCurrency.addEventListener("submit", function(evt) {
    evt.preventDefault();
    let elCurrencyInputValue = Number(elInputCurrency.value.trim());
    let elCurrencySelectValue = Number(elSelectCurrency.value.trim());

    elResultText.textContent = elCurrencyInputValue * elCurrencySelectValue;
})


let elFindNumberForm = document.querySelector(".js-form-find");
let elFindNumberInput = document.querySelector(".js-input-find");
let elAttemptCount = document.querySelector(".js-attempt-count");
let elResultTextFind = document.querySelector(".js-result-number");
let elFindBtn = document.querySelector(".js-find-btn");

var randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

var maxAttemptNumber = 6;

elAttemptCount.textContent = `Urinishlar soni ${maxAttemptNumber}`;

elFindNumberForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var elInputValue = Number(elFindNumberInput.value);
    maxAttemptNumber--;

    elAttemptCount.textContent = `Urinishlar soni ${maxAttemptNumber}`;

    if (elInputValue > randomNumber) {
        elResultTextFind.textContent = "Kiritgan raqamizngiz ixtiyoriy sondan katta";
        elResultTextFind.classList.add("alert-danger");
    } else if (elInputValue < randomNumber) {
        elResultTextFind.textContent = "Kiritgan raqamizngiz ixtiyoriy sondan kichik";
        elResultTextFind.classList.remove("alert-danger");
        elResultTextFind.classList.add("alert-warning");
    } else {
        elResultTextFind.textContent = "Urra Yutdingiz !!!!";
        elResultTextFind.classList.remove("alert-warning");
        elResultTextFind.classList.add("alert-success");
    }

    if (maxAttemptNumber == 0) {
        elFindNumberInput.disabled = true;
        elAttemptCount.textContent = "Urinishlar soni tugadi !!!!!!!!!!";

        elAttemptCount.classList.add("alert-danger");
    }
})
