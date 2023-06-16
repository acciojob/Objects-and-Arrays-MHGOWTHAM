const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

var team = players;
var team1 = players;
var cap1 = person;

	
window.players = team;
window.players[3]="Dhoni"
window.person = person;
window.team = players;
window.team[3]="Poppy"
window.team1 = team1;
window.cap1 = cap1;
