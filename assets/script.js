let firstSpanV = document.getElementById('vegan');
let firstSpanM = document.getElementById('meat');
let firstSpanC = document.getElementById('custom');

let veg = document.getElementById('.vegetables');

let firstPage = document.querySelector('.firstPage');
console.log(firstPage)

firstPage.addEventListener('click', function () {
    firstPage.hidden = true;
    veg.hidden = false;
    vegGroup();
})

function vegGroup(){

    var multipleCancelButton = new Choices('#choices-multiple-remove-button',{
    removeItemButton: true,
    maxItemCount:5,
    searchResultLimit:5,
    renderChoiceLimit:5
});
}



