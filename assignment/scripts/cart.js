console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
let itemName = [];
const maxItems = 5;

function addItem(itemName) {
    if (basket.length <= maxItems){
        basket.push(itemName);
        return true;
    } else {
        return false;
    }
}

console.log(addItem('Potatoes'));
console.log(addItem('Chips'));
console.log(addItem('Sausages'));
console.log(addItem('Nice Crispy Bacon'));
console.log(addItem('Roast veal'));
console.log(addItem('Meat right off the bone'));
console.log(basket);

console.log(`Basket is ${basket}`);
console.log('Trying to add an item to a full basket:', (addItem('Lambas Bread')));

function listItems() {
    for (let x = 0; x < basket.length; x++) {
        console.log(basket[x]);
    }
}

console.log(listItems());

function empty() {
    while (basket.length > 0) {
        basket.splice(0, basket.length);
        return basket;
    }
}

function isFull() {
    if (basket.length > maxItems) {
        return true;
    } else {
        return false;
    }
}

console.log(isFull(basket));
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


// This needs more work... I can get it to remove index 1 of basket, just not the correct/exact item.
function removeItem(array, item) {
    for (let i = 0; i < basket.length; i++) {
        if (item === array[item]); {
            array.splice(item, 1);
            return array;
        }
    }
}
console.log(removeItem(basket, 'Chips'));