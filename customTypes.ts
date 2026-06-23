type Address = {
  state: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: { state: "Georgia", country: "USA" },
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: { state: "Alaska", country: "USA" },
};

const people: Person[] = [person1, person2];
