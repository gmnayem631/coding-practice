type UserRole = "guest" | "member" | "admin";

// let userRole: UserRole = "admin";

type User = { username: string; role: string };

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "bob_zorill", role: "admin" },
  { username: "guest_user", role: "guest" },
];

function fetchUserDetails(username: string) : User{
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with username ${username} is not found`);
  }
  return user;
}
