const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

const team = players;
const team1 = [...players];
const cap1 = {...person};

players.push("New Player");
person.age = 81;

console.log("Original players:", players);
console.log("team:", team);
console.log("team1:", team1);
console.log("Original person:", person);
console.log("cap1:", cap1);