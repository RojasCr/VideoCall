
var socket = io("/");

const video = document.getElementById("videoRender");
const videoRecep = document.getElementById("videoRecep");
const grabarBtn = document.getElementById('grabarBtn');
const stopBtn = document.getElementById('stopBtn');

var myPeer = new Peer(undefined, {})

myPeer.on("open", (id) => {
    //id = "Host"
    socket.emit("join", id);
    console.log('My peer ID is: ' + id);
});



grabarBtn.addEventListener("click", () => {
    const llamar = window.confirm("¿Comenzar transmisión?")
    
    if(!llamar){
        return window.location.href = "/profile";
    }

    const constraints = {
        video: true,
        audio: false
    }

    socket.emit("transmiting", myPeer.id)

    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {

        video.srcObject = stream;
      
        socket.on("userId", id => {
            //const allowVisitor = window.confirm(`User join with id: ${id}`);
            Swal.fire({
                text:`User join with id: ${id}`,
                showCancelButton: true
            })
            .then(result => {
                if(!result.isConfirmed){
                    return socket.emit("forbidden", "El host negó el acceso");             
                }

                const currentCall = myPeer.call(id, stream);
                
                currentCall.on("stream", stream => {
                    videoRecep.srcObject = stream;
                    
                })
            })
            
        })
    })
    .catch(error => {
        console.error('Error accessing media devices.', error);
    });


})

stopBtn.addEventListener("click", () =>{
    video.pause();
    socket.emit("stopVideo", "El video ha finalizado")
    window.alert("El video ha finalizado");
    return window.location.href = "/profile";
})