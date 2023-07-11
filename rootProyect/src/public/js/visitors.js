var socket = io("/");
const videoRecep = document.getElementById("videoRecep");
const stopBtn = document.getElementById("stopBtn");

var myPeer = new Peer(undefined, {})

myPeer.on("open", (id) => {
    socket.emit("join", id);
    console.log('My peer ID is: ' + id);
});

socket.on("notAllowed", data => {
    window.alert(data);
    return window.location.href = "/profile";
})

socket.on("videoEnded", data => {
    window.alert(data);
    return window.location.href = "/profile";
})

myPeer.on("call", (call) => {
    
    const constraints = {
        video: true,
        audio: false
    }
    navigator.mediaDevices.getUserMedia(constraints)
    .then(visitorStream => {

        call.answer();
        call.on("stream", stream => {
            videoRecep.srcObject = stream;
        })  
    })
})

stopBtn.addEventListener("click", () => {
    const stay = window.confirm("¿Seguro que deseas salir?");

    if(stay){
        return window.location.href = "/profile";
    }
})
