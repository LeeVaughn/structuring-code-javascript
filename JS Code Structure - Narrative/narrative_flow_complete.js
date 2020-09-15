function crust() {
  options = ["thin", "hand tossed", "pan"];

  return options[Math.floor(Math.random() * options.length)];
}

function cheese() {
  options = ["provolone", "parmesan", "mozzarella"];

  return options[Math.floor(Math.random() * options.length)];
}

function veggies() {
  options = ["green Peppers", "onions", "mushrooms", "banana peppers"];

  return options[Math.floor(Math.random() * options.length)];
}

function meat() {
  options = ["pepperoni", "sausage", "ham"];

  return options[Math.floor(Math.random() * options.length)];
}

function createPizza() {
  return `Your random pizza is a ${crust()} pizza with ${meat()}, ${veggies()}, and ${cheese()}!`
}

console.log(createPizza())
