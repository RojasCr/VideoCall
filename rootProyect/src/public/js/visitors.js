var socket = io("/");
const videoRecep = document.getElementById("videoRecep");

var myPeer = new Peer(undefined, {
    /*host: "/",
    port: "8081",*/
})

myPeer.on("open", (id) => {
    socket.emit("join", id);
    console.log('My peer ID is: ' + id);
});

myPeer.on("connection", (conn) => {

    conn.on("open", () => {
        conn.send("hola de nuevo")
        conn.on("data", (data) => {
            console.log(data)
        })

    })
    
})

const constraints = {
    video: true,
    audio: false
}

myPeer.on("call", (call) => {
    const acepted = confirm("¿Aceptas la llamada?")

    if(acepted){
        navigator.mediaDevices.getUserMedia(constraints)
        .then(visitorStream => {

    
        
        
            const video = document.getElementById("videoRender");
            video.srcObject = visitorStream;
            call.answer(visitorStream)
            call.on("stream", stream => {
                //const newStream = new Blob([stream])
                videoRecep.srcObject = stream;
                //console.log(newStream)
                //console.log(stream.getTracks())
    
            })  
        })
    }    //console.log(call)
})
