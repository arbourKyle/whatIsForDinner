
let baseIng = sessionStorage.getItem('base');
let vegIng = sessionStorage.getItem('vegetable');
let proteinIng = sessionStorage.getItem('protein');

let title = document.getElementById('title');

window.onload = ()=> {
    // ingSelection();
    formatIng();
};


function formatIng() {
    console.log(baseIng)
    console.log(vegIng)
    console.log(proteinIng)

}
/* function ingSelection() {
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+apples,+flour,+sugar+'&number=1&apiKey='+key)
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
    } */