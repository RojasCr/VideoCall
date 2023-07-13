var socket = io("/");
const videoRecep = document.getElementById("videoRecep");
const stopBtn = document.getElementById("stopBtn");
const cont = document.getElementById("cont");

var myPeer = new Peer("Fabi", {})

/*myPeer.on("open", (id) => {
    //id = "Fabi"
    socket.emit("join", id);
    console.log('My peer ID is: ' + id);
});*/

socket.on("notAllowed", data => {
    window.alert(data);
    return window.location.href = "/profile";
})

socket.on("currentTransmission", (data) => {
    const newStream = document.createElement("div");
    cont.appendChild(newStream);
    newStream.innerHTML = data;

    newStream.addEventListener("click", () => {
        socket.emit("wantToJoin", data, myPeer.id);
        console.log('My peer ID is: ' + myPeer.id);
    })
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

/*stopBtn.addEventListener("click", () => {
    const stay = window.confirm("¿Seguro que deseas salir?");

    if(stay){
        return window.location.href = "/profile";
    }
})*/
