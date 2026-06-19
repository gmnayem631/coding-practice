// const menu = [
//   { name: "Margherita", price: 8 },
//   { name: "Pepperoni", price: 10 },
//   { name: "Hawaiian", price: 12 },
//   { name: "Veggie", price: 9 },
// ];

// let cashInRegister = 100;
// const orderQueue = [];
// let id = 0;

// const addNewPizza = (pizza) => {
//   menu.push(pizza);
//   return menu;
// };

// console.log(addNewPizza({ name: "Dominos", price: 11 }));

// function placeOrder(pizzaName) {
//   const selectedPizza = menu.find(
//     (singleItem) => singleItem.name.toLowerCase() === pizzaName.toLowerCase(),
//   );
//   cashInRegister = selectedPizza.price + cashInRegister;

//   const newOrder = { pizza: selectedPizza, status: "ordered", id: id++ };
//   orderQueue.push(newOrder);
//   return newOrder;
// }

// placeOrder("veggie");
// placeOrder("Hawaiian");
// console.log(orderQueue);

// function completeOrder(orderId) {
//   const order = orderQueue.find(
//     (selectedOrder) => selectedOrder.id === orderId,
//   );
//   order["status"] = "completed";
//   return order;
// }

// console.log(completeOrder(2));
