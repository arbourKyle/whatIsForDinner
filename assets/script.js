let firstSpanV = document.getElementById('rice');
let firstSpanM = document.getElementById('pasta');
let firstSpanC = document.getElementById('potato');

let veg = document.getElementById('vegetables');
let vegInput = document.getElementById('vegetable');
let vegNum =  document.getElementById('numberVeg');

let submitBtn = document.getElementById('submitBtn');

let base = document.querySelector('#dishBase');
let firstPage = document.querySelector('#firstPage');
// console.log(firstPage)

var isRice = false;
var isPasta = false;
var isPotato = false;
var vegChoice = "";
var vegNumButton = 0;


function passTheFirstPage() {
    firstPage.hidden = true;
    veg.hidden = false;
    passTheVegetables();
}

function passTheSecondPage() {

    base.hidden = true;
    veg.hidden = false;
}


//choose rice, pasta, or potato dish
document.addEventListener('click', function baseOption(event) {
    if(event.target == `${rice}`) {
        isRice = true;
        passTheFirstPage();
      }
      else if (event.target == `${pasta}`){
          isPasta = true;
          passTheFirstPage();
      }
      else {
          isPotato = true;
          passTheFirstPage();
      }
    //   console.log(event.target);
}); //end of choose base

function passTheVegetables() {

    submitBtn.addEventListener('click', function(event){
    
    event.preventDefault();
    console.log(event)

    vegChoiceArr = JSON.parse(localStorage.getItem("vegetable")) || [];
    let tempArr = vegInput.value;
    vegChoiceArr.push(tempArr);
    })//end of listener
    
}//end of passTheVegetables

function veganOption() {
    
}

function meatOption() {
    
}

function customOption() {
    
}
function toppingOption() {
    
}

