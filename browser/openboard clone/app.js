const express = require("express");//Access
const socket = require("socket.io");

const app = express();//initialized and server ready
app.use(express.static("public"));

let port = process.env.PORT || 4000;//jha hum host kar rhe hai uske envronment se dependent hoke hume port automaticaly alote ho jaegi
let server = app.listen(port, () => {
    console.log("listening to port" + port);
})

let io = socket(server);

io.on("connection", (socket) => {
    console.log("Made socket connection");

    //received data
    socket.on("beginPath", (data) => {
        //data from frontend
        //now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    })
    socket.on("drawStroke", (data) => {
        io.sockets.emit("drawStroke", data);
    })
    socket.on("redoUndo", (data) => {
        io.sockets.emit("redoUndo", data);
    })
})
