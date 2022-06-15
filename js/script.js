const jsString = document.querySelector(".js-string");
const jsClaim = document.querySelector(".js-claim");
const jsControl = document.querySelector(".js-control");
const jsJur = document.querySelector(".js-jur");
const jsMot = document.querySelector(".js-mot");
const jsBtn = document.querySelector(".js-button");
const jsWrapper = document.querySelector('.js-wrapper');
const jsDelete = document.querySelector(".js-delete");
const inputs = document.querySelectorAll('input');


// функция делает из строк byn
function getStrings(value) {
   let str = Number(0.092);
   if (value > 11200 && value < 13400) {
      str = 0.095;
   } else if (value > 13400 && value < 15100) {
      str = 0.097;
   } else if (value > 15100) {
      str = 0.105;
   };
   let result = Math.floor(value * str);
   return result;
};



// претензии
function takeClaims(value, claim) {
   let result = value - claim * 10;
   return result;
};
//


// штрафы 
function takeControl(value, control) {
   let result = value - control;
   return result;
};
//

// юр лица
function getJur(value, jur) {
   let result = value / 1 + jur / 1;
   return result;
};
//

// мотивация за стаж
function getMotivation(value, mot) {
   let result = Math.floor(value + (value * (mot * 0.01)));
   return result;
};
//

// подоходный налог
function takeTax(value) {
   let result = Math.floor(value - (value * (14 * 0.01)));
   return result;
};
//

// вывод на экран
function render(value) {
   let html = '';
   html += `<div class="zp">Ваша примерная зарплата: <p>${value} рублей</p></div>`;
   jsWrapper.innerHTML = html;
};

function deleteSalary(){
   let html = '';
   jsWrapper.innerHTML = html;
}

jsBtn.addEventListener('click', () => {
   var value = jsString.value;
   value = getStrings(value);
   value = takeClaims(value, jsClaim.value);
   value = takeControl(value, jsControl.value);
   value = getJur(value, jsJur.value);
   value = getMotivation(value, jsMot.value);
   render(value);
   console.log(value);
});

jsDelete.addEventListener('click', () => {
   inputs.forEach(input => input.value = '');
   deleteSalary();

});










