const io = require("socket.io")(8000, {
  cors: {
    origin: "*",
  },
});

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user-joined", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-joined", name);
  });

  socket.on("send", (msg) => {
    socket.broadcast.emit("recieve", { msg, user: users[socket.id] });
  });
});
