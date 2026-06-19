const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 12 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];
let id = 0;

/**
 * Challenge: add a utility function called "addNewPizza" that takes a pizza object
 * and adds it to the menu
 */

const addNewPizza = (pizza) => {
  menu.push(pizza);
  return menu;
};

// console.log(addNewPizza({ name: "Dominos", price: 11 }));

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
  const selectedPizza = menu.find(
    (singleItem) => singleItem.name.toLowerCase() === pizzaName.toLowerCase(),
  );
  cashInRegister = selectedPizza.price + cashInRegister;

  const newOrder = { pizza: selectedPizza, status: "ordered", id: id++ };
  orderQueue.push(newOrder);
  return newOrder;
}

placeOrder("veggie");
placeOrder("Hawaiian");
// console.log(orderQueue);

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId (string) as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You
 * can use a global `nextOrderId` variable and increment it every time a new order is created
 * to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
  const order = orderQueue.find(
    (selectedOrder) => selectedOrder.id === orderId,
  );
  order["status"] = "completed";
  return order;
}

console.log(completeOrder(2));
