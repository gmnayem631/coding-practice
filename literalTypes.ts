type UserRole = "guest" | "member" | "admin";

type User = { id: number; username: string; role: string };

// const UpdatedUser = Partial<User>;
type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "bob_zorill", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
];

// function fetchUserDetails(username: string): User {
//   const user = users.find((user) => user.username === username);
//   if (!user) {
//     throw new Error(`User with username ${username} is not found`);
//   }
//   return user;
// }

function updateUser(id: number, updates: any) {
  // updates is an array
  // find the user in the array by ID
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    console.error("User not found");
    return;
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = { id: nextUserId++, ...newUser };
  users.push(user);
  return user;
}

addNewUser({ username: "joe_schmoe", role: "member" });
