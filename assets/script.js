let firstSpanV = document.getElementById('rice');
let firstSpanM = document.getElementById('pasta');
let firstSpanC = document.getElementById('potato');

let veg = document.getElementById('vegetables');
let vegInput = document.getElementById('vegetable');
let vegNum =  document.getElementById('numberVeg');

let proteinOption = document.getElementById('proteinOption');

let submitBtn = document.getElementById('submitBtn');

let base = document.querySelector('#dishBase');
let firstPage = document.querySelector('#firstPage');
// console.log(firstPage)

var isRice = false;
var isPasta = false;
var isPotato = false;
var vegList;


function passTheFirstPage() {
    firstPage.hidden = true;
    veg.hidden = false;
}



//choose rice, pasta, or potato dish
function baseOption(event) {
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
        console.log(event.target);
    } //end of choose base
    firstPage.addEventListener('click', baseOption, true);

    
//vegetable options
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event)
    
    //make an array in local storage
    vegChoiceArr = JSON.parse(localStorage.getItem('vegetable')) || [];
    let tempArr = vegInput.value;
    vegChoiceArr.push(tempArr);
    localStorage.setItem('vegetable', JSON.stringify(vegChoiceArr));
    
    // localStorage.clear();
    if(vegChoiceArr.length === 1) {
        vegNum.innerText = 1;
        vegInput.placeholder = '2nd vegetable...';
    }
    else if (vegChoiceArr.length === 2) {
        vegNum.innerText = 2;
        vegInput.placeholder = 'One more..'
    }
    else {
        vegNum.innerText = 3;
        // vegInput.placeholder = '1st vegetable';
        passTheSecondPage();
        localStorage.clear()
        veg.hidden = true;
        proteinOption.hidden = false;
    }
    
    //clears submit field
    function submit_form() {
        document.form1.reset(); 
    }
    submit_form();
})//end of listener


function passTheSecondPage() {
   let vegList = JSON.stringify(localStorage.getItem('vegetable'))
    // console.log(vegList);
}
//end of passTheVegetables















function veganOption() {
    
}

function meatOption() {
    
}

function customOption() {
    
}
function toppingOption() {
    
}

