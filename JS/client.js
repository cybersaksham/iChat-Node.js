// Getting DOM Elements
const msgContainer = document.getElementById("msgContainer");
const form = document.getElementById("sendForm");
const msgInp = document.getElementById("msgInp");

// Socket IO
const socket = io("http://localhost:8000");

// Function to append any type of event
const append = (msg, pos) => {
  const msgElem = document.createElement("div");
  msgElem.innerHTML = msg;
  msgElem.classList.add("message");
  msgElem.classList.add(pos);
  msgContainer.append(msgElem);
};

const name = prompt("Enter your name to join chat.");
socket.emit("new-user-joined", name);

// User Joined Event
socket.on("user-joined", (name) => append(`${name} joined`, "center"));
