var socket = io("/");
//const myId = document.getElementById("myId")
const grabarBtn = document.getElementById('grabarBtn');
const stopBtn = document.getElementById('stopBtn');
const videoRecep = document.getElementById("videoRecep");

var myPeer = new Peer(undefined, {
    //host: "/",
    //port: "8081",
})

myPeer.on("open", (id) => {
    socket.emit("join", id);
    console.log('My peer ID is: ' + id);
});


const constraints = {
    video: true,
    audio: true
}

socket.on("userId", id => {
    console.log("User join with id: " + id);
    grabarBtn.addEventListener("click", () => {

        const llamar = confirm("¿Iniciar llamada?")

        if(!llamar){
            return console.log("No llamaste")
        }

        navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => {

            
            const video = document.getElementById("videoRender");
            video.srcObject = stream;
            
            
            
                
            //const conn = myPeer.connect(id)
            
            const currentCall = myPeer.call(id, stream);
        
            currentCall.on("stream", stream => {
                videoRecep.srcObject = stream;
                
            })
            
            //console.log('User join with ID: ' + id);
                
        })
        .catch(error => {
            console.error('Error accessing media devices.', error);
        });
    })

})