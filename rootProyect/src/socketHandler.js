const socketHandler = (socketServer) => {
    socketServer.on("connection", (socket) => {

        socket.name = `socket ${Math.floor(Math.random()*100)}`
        
        console.log(`${socket.name} Connected`);
    
        socket.on("join", id => {
            socket.join(id)
            //socket.broadcast.emit("userId", id)
        })
        
        socket.on("forbidden", (data) => {
         
            socket.broadcast.emit("notAllowed", data)
        })
        
        socket.on("transmiting", (id) => {
            socket.join(id);
            //console.log(socket)
            socket.broadcast.emit("currentTransmission", id)
            socket.to(id).emit("currentTransmission", id)
        });

        socket.on("wantToJoin", (data, id) => {
            socket.join(data);
            socket.to(data).emit("userId", id);
        })

        socket.on("stopVideo", data => {
            socket.broadcast.emit("videoEnded", data)
        })
        
        socket.on("disconnect", () => {
            console.log(`${socket.name} Disconnected`);
        })
    })
}

module.exports = socketHandler;