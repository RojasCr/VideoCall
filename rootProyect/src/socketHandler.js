const socketHandler = (socketServer) => {
    socketServer.on("connection", (socket) => {

        socket.name = `socket ${Math.floor(Math.random()*100)}`
        
        console.log(`${socket.name} Connected`);
    
        socket.on("join", id => {
            socket.broadcast.emit("userId", id)
        })
        
        socket.on("forbidden", (data) => {
            //console.log(data)
            socket.broadcast.emit("notAllowed", data)
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