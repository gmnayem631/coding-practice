type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const pizza = { id: "1", pizza: "Veggie", status: "ordered" };

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 12 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderHistory: Order[] = [];
let id = 0;

const addNewPizza = (pizza: Pizza) => {
  menu.push(pizza);
  return menu;
};

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find(
    (singleItem) => singleItem.name.toLowerCase() === pizzaName.toLowerCase(),
  );

  if (!selectedPizza) {
    console.error(`${selectedPizza} does not exist`);
    return;
  }
  cashInRegister = selectedPizza.price + cashInRegister;

  const newOrder = { pizza: selectedPizza, status: "ordered", id: id++ };
  orderHistory.push(newOrder);
  return newOrder;
}

placeOrder("veggie");
placeOrder("Hawaiian");

function completeOrder(orderId: number) {
  const order = orderHistory.find(
    (selectedOrder) => selectedOrder.id === orderId,
  );
  if (!order) {
    console.error(`${orderId} does not exist`);
    return;
  }
  order.status = "completed";
  return order;
}

console.log(completeOrder(2));
