

let title = document.getElementById('title');
let image = document.getElementById('img');
let ulIngredients = document.getElementById('ingredients');
let ulInstructions = document.getElementById('instructions');


var data;



window.onload = ()=> {
    randomSelection();
};

function randomSelection() {
    fetch('https://api.spoonacular.com/recipes/random?apiKey='+key)
      .then(function(response) { return response.json() }) 
      .then(function(data) {
        //console.log(data)
        //console.log(data.recipes[0].image)
        //console.log(data.recipes[0].analyzedInstructions[0].steps[0].ingredients)
        //title.innerHTML = data.recipes[0].title;
        addImage(data);
       
    })
    .catch(function() {
    })
    }

//add an image
function addImage(data) {
    image.setAttribute('src', data.recipes[0].image);
    // console.log(data.recipes[0].image);

    //a list of ingredients
    let theIngredients = data.recipes[0].extendedIngredients;
    theIngredients.forEach(element => {
        let content = element.name;
        let contentLi = document.createElement('li');
        contentLi.innerHTML = content;
        ulIngredients.appendChild(contentLi);
        // console.log(element.name);
    });
    
    //cooking instructions
    let theSteps = data.recipes[0].analyzedInstructions[0].steps;
    theSteps.forEach(element => {
        console.log(theSteps);
        let xcontent = element.step;
        let xcontentLi = document.createElement('li');
        xcontentLi.innerHTML = xcontent;
        ulInstructions.appendChild(xcontentLi);
    });


}
   



//a footer to go back to first page