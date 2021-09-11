// Getting DOM Elements
const msgContainer = document.getElementById("msgContainer");
const form = document.getElementById("sendForm");
const msgInp = document.getElementById("msgInp");

// Socket IO
const socket = io("http://localhost:8000");

// Function to append any type of event
const append = (msg, pos, user) => {
  if (user !== null) {
    const msgElem = document.createElement("div");
    msgElem.innerHTML = msg;
    msgElem.classList.add("message");
    msgElem.classList.add(pos);
    msgContainer.append(msgElem);
  }
};

// Connecting
let name = null;
while (name === null) {
  name = prompt("Enter your name to join chat.");
}
socket.emit("new-user-joined", name);

// User Joined Event
socket.on("user-joined", (name) => append(`${name} joined`, "center", name));

// Send Message Event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = msgInp.value;
  socket.emit("send", msg);
  append(msg, "right", name);
  msgInp.value = "";
});

// Recieve Message Event
socket.on("recieve", (data) => {
  append(`${data.user}: ${data.msg}`, "left", data.user);
});

// Disconnecting
socket.on("left", (name) => append(`${name} left`, "center", name));
