const key = '5d367e532fd44cd58ba1fcb5151c27d2'

let firstSpanRice = document.getElementById('rice');
let firstSpanpasta = document.getElementById('pasta');
let firstSpanPotato = document.getElementById('potato');
let firstSpanRandom = document.getElementById('random');

let veg = document.getElementById('vegetables');
let vegInput = document.getElementById('vegetable');
let vegNum =  document.getElementById('numberVeg');

let proteinOption = document.getElementById('proteinOption');
let proteinInput = document.getElementById('protein');

let submitBtn = document.getElementById('submitBtn');
let submitBtn2 = document.getElementById('submitBtn2');

let base = document.querySelector('#dishBase');
let firstPage = document.querySelector('#firstPage');
// console.log(firstPage)

var isRice = false;
var isPasta = false;
var isPotato = false;
var vegChoiceArr;
var proteinChoiceArr;
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
    console.log(event, 'broccoli')
    
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
        let vegList = JSON.stringify(localStorage.getItem('vegetable'));
        // passTheSecondPage();
        localStorage.clear();
        veg.hidden = true;
        proteinOption.hidden = false;
        console.log(vegList);
    }
    
    //clears submit field
    function submit_form() {
        document.form1.reset(); 
    }
    submit_form();
})//end of vegetable listener


//protein options
submitBtn2.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event, 'tofu')
    
    //make an array in local storage
    proteinChoiceArr = JSON.parse(localStorage.getItem('protein')) || [];
    let tempArr = proteinInput.value;
    proteinChoiceArr.push(tempArr);
    localStorage.setItem('protein', JSON.stringify(proteinChoiceArr));
    let proteinList = JSON.stringify(localStorage.getItem('protein'));
    console.log(proteinList);
    
    if(proteinChoiceArr.length == 1) {
        localStorage.removeItem('protein');
    }
    
    //clears submit field
    function submit_form() {
        document.form2.reset(); 
    }
    submit_form();
})


//random fetch
document.getElementById("random").onclick = function () {
    location.href = "random.html";
    
}

  //how will I get and process the data??

  //  recipes -> 0  -> analyzedInstructions  -> 0 ->  steps 0-4 -> step "str"