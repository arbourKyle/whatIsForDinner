const key = '5d367e532fd44cd58ba1fcb5151c27d2'

let rice = document.getElementById('rice');
let pasta = document.getElementById('pasta');
let potato = document.getElementById('potato');
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


var vegChoiceArr;
var proteinChoiceArr;
var baseList;
var vegList;
var proteinList;


function passTheFirstPage() {
    firstPage.hidden = true;
    veg.hidden = false;
}



//choose rice, pasta, or potato dish
function baseOption(event) {
    if(event.target == rice) {
        
        baseList = 'rice';
        passTheFirstPage();
      }
      else if (event.target == pasta){
          
          baseList = 'pasta';
          passTheFirstPage();
      }
      else {
          
          baseList = 'potato';
          passTheFirstPage();
        }
        console.log(event.target, baseList);
        sessionStorage.setItem('base', baseList);
    } //end of choose base
    firstPage.addEventListener('click', baseOption, false);

    
//vegetable options
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event, 'broccoli')
    
    //make an array in local storage
    vegChoiceArr = JSON.parse(localStorage.getItem('vegetable')) || [];
    let tempArr = vegInput.value;
    vegChoiceArr.push(tempArr);
    localStorage.setItem('vegetable', JSON.stringify(vegChoiceArr));
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
        vegList = JSON.stringify(localStorage.getItem('vegetable'));
        // passTheSecondPage();
        localStorage.clear();
        veg.hidden = true;
        proteinOption.hidden = false;
        console.log(vegList);
        sessionStorage.setItem('vegetable', vegList);
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
    proteinList = JSON.stringify(localStorage.getItem('protein'));
    console.log(proteinList);
    sessionStorage.setItem('protein', proteinList);
    
    if(proteinChoiceArr.length === 1) {
        localStorage.removeItem('protein');
    }
    //clears submit field
    function submit_form() {
        document.form2.reset(); 
    }
    submit_form();
    check();
    
})

check = () => console.log(baseList, vegList, proteinList);

//ingredient fetch
document.getElementById("submitBtn2").onclick = function () {
    location.href = "ing.html";
    
}


//random fetch
document.getElementById("random").onclick = function () {
    location.href = "random.html";
    
}
