type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

type Identifier = string | number;

// const pizza = { id: 1, pizza: "Veggie", status: "ordered" };

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 8 },
  { id: 2, name: "Pepperoni", price: 10 },
  { id: 3, name: "Hawaiian", price: 12 },
  { id: 4, name: "Veggie", price: 9 },
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

  const newOrder: Order = { id: id++, pizza: selectedPizza, status: "ordered" };
  orderHistory.push(newOrder);
  return newOrder;
}

placeOrder("veggie");
placeOrder("Hawaiian");

export function getPizzaDetail(identifier: Identifier): Pizza | undefined {
  /**
   * challenge: write the code to check if the parameter is a string or a number,
   * and use the menu.find() method accordingly
   */
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase(),
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
}

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

// console.log(completeOrder(2));
