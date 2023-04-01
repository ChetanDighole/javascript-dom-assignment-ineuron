const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// remove 'Honey' if you are allergic to honey
const allergicToHoney = true; // set to true if you are allergic to honey, false otherwise
if (allergicToHoney && shoppingCart.includes('Honey')) {
  shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}

// modify Tea to 'Green Tea'
if (shoppingCart.includes('Tea')) {
  shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
}

console.log(shoppingCart); // output: ["Meat", "Milk", "Coffee", "Green Tea", "Sugar"]
