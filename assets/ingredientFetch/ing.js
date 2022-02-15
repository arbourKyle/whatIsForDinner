

let baseIng = sessionStorage.getItem('base');
let vegIng = JSON.parse(sessionStorage.getItem('vegetable'));
let proteinIng = JSON.parse(sessionStorage.getItem('protein'));

let title = document.getElementById('title');
let pageTitle = document.getElementById('pageTitle');


let ingUl = document.getElementById('ingredients');
let instructUl = document.getElementById('instructions');


window.onload = ()=> {
    formatIng();
    ingSelection()
};

//removing unwanted characters from string and extracting individual words for fetch query
function formatIng() {
    // console.log(baseIng)
    // console.log(vegIng)
    // console.log(proteinIng)
    
//remove excess characters
    let vegStrBracket = vegIng.replace('[', '');
    //let vegStrBackSlash = vegStrBracket.replace('\\', '');
    // let vegStrComma = vegStrBackSlash.replace(',', ' ');
    // let vegStrComma2 = vegStrComma.replace(',', ' ');
    let vegStrT = vegStrBracket.replace(']', '');
    // let vegStrBackSlash2 = vegStrBracketRight.replace('\\', '');
    // let vegStrBackSlash3 = vegStrBackSlash2.replace('\\', '');
    // let vegStrBackSlash4 = vegStrBackSlash3.replace('\\', '');
    // let vegStrBackSlash5 = vegStrBackSlash4.replace('\\', '');
    // vegStr = vegStrBackSlash5.replace('\\', ''); */

    // console.log(vegStrT)

//remove excess characters
    // let protRemovebackSlash = proteinIng.replace('\\', '');
    // let protRemovebackSlash2 = protRemovebackSlash.replace('\\', '');
    let protRemoveBracketLeft = proteinIng.replace('[', '');
    let protStrT = protRemoveBracketLeft.replace(']', '');
    // protStr = protRemoveBracketRight.replace('"', '');
    
    let p = protStrT.replace('"', '');
    protStr = p.replace('"', '');
    // console.log(protStr)
    sessionStorage.setItem('prot', protStr)

//extract individual words

    let vegStrTT = vegStrT.split(',');
    // console.log(vegStrTT)

    let xx = vegStrTT[0].toString();
    let xxx = xx.replace('"', '');
    x = xxx.replace('"', '');
    let yy = vegStrTT[1].toString();
    let yyy = yy.replace('"', '');
    y = yyy.replace('"', '');
    let zz = vegStrTT[2].toString();
    let zzz = zz.replace('"', '');
    z = zzz.replace('"', '');
    // console.log(x, y, z);
    sessionStorage.setItem('x', x)
    sessionStorage.setItem('y', y)
    sessionStorage.setItem('z', z)
   
   
   
}

var protStr = sessionStorage.getItem('prot');
var x =sessionStorage.getItem('x');
var y = sessionStorage.getItem('y');
var z = sessionStorage.getItem('z');


// le fetch
function ingSelection() {
   
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+protStr+',+'+x+',+'+y+',+'+z+'&apiKey='+key)
        .then(function(response) { return response.json() }) 
        .then(function(data) {
        console.log(data[0])
        title.innerHTML = data[0].title;
        //console.log(data.recipes[0].image)
        //console.log(data.recipes[0].analyzedInstructions[0].steps[0].ingredients)
        //title.innerHTML = data.recipes[0].title;
        addImageIng(data);
        popList(data);
        clear();
    })
        .catch(function() {
    })
}


//add image card
function addImageIng(data) {
        console.log(data[0].image)
        img.setAttribute('src', data[0].image);
    }


//populate the page content
function popList(data){
    

    //title
    pageTitle.textContent = data[0].title;

    //chosen ingredients
    let chosenIngredients = data[0].usedIngredients;
    chosenIngredients.forEach(element => {
        let content = element.original+' '+element.name;
        let contentLi = document.createElement('li');
        contentLi.innerHTML = content;
        ingUl.appendChild(contentLi);
        // console.log(element.name);
    });

    //missing ingredients
    let missingIngredients = data[0].missedIngredients;
    missingIngredients.forEach(element => {
        let content = element.original+' '+element.name;
        let contentLi = document.createElement('li');
        contentLi.innerHTML = content;
        ingUl.appendChild(contentLi);
        // console.log(element.name);

        
    });
}

function clear() {
        setTimeout
        sessionStorage.clear();
    }