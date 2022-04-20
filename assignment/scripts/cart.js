console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(itemName) {
    basket.push(itemName);
    return basket;
}

console.log(addItem("Potatoes"));
console.log(addItem("Chips"));
console.log(addItem("Sausages"));
console.log(addItem("Nice Crispy Bacon"));
console.log(basket);