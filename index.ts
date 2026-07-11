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

let cashInRegister = 100;
const orderHistory: Order[] = [];
let nextPizzaId = 1;
let id = 1;

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 12 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

function addToArray<T>(array: T[], item: T): T[] | undefined {
  array.push(item);
  return array;
}

addToArray<Pizza>(menu, {
  id: nextPizzaId++,
  name: "chicken bacon ranch",
  price: 12,
});
addToArray<Order>(orderHistory, {
  id: nextPizzaId++,
  pizza: menu[2],
  status: "completed",
});

function addNewPizza(pizza: Omit<Pizza, "id">): Pizza {
  const newPizzaObj: Pizza = { id: nextPizzaId++, ...pizza };
  // pizza.id = nextPizzaId++;
  menu.push(newPizzaObj);
  return newPizzaObj;
}

// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ name: "BBQ Chicken", price: 10 });
// addNewPizza({ name: "Spicy Sausage", price: 11 });

function placeOrder(pizzaName: string): Order | undefined {
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

function completeOrder(orderId: number): Order | undefined {
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
