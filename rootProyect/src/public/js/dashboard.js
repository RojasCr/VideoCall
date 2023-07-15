var socket = io("/");

var myPeer = new Peer("Fabi", {})

socket.on("currentTransmission", (data) => {
    const cardContainer = document.getElementById("card-container");
    
    
    const card = document.createElement("div");
    card.className = "card";
    cardContainer.appendChild(card);
    //card.innerHTML = "hola";
    
    const cardImg = document.createElement("img");
    cardImg.src = "https://vivolabs.es/wp-content/uploads/2022/03/perfil-hombre-vivo.png"
    card.appendChild(cardImg);
    
    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info";
    card.appendChild(cardInfo);
    
    const contactName = document.createElement("div");
    contactName.className = "contact-name";
    contactName.innerHTML = data
    cardInfo.appendChild(contactName);
    
    const openCard = document.createElement("button");
    openCard.className = "btn-primary";
    openCard.innerHTML = "Ver directo"
    cardInfo.appendChild(openCard);
    
    const main = document.getElementsByTagName("main")[0]

    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    openCard.addEventListener("click", () => {
        const video = document.createElement("video");
        socket.emit("wantToJoin", data, myPeer.id);

        
        main.appendChild(videoContainer);

        //video.autoplay = true
        
        videoContainer.appendChild(video);
        
        myPeer.on("call", (call) => {
    
            const constraints = {
                video: true,
                audio: false
            }
        
            navigator.mediaDevices.getUserMedia(constraints)
            .then(visitorStream => {
        
                call.answer();
                call.on("stream", stream => {
                    video.srcObject = stream;
                    video.play().then(() =>{});

                })  
            })
            
        })
        
        socket.on("videoEnded", () => {
            video.pause();
            const videoTracks = video.srcObject.getVideoTracks();
            videoTracks.forEach(track => {
                video.srcObject.removeTrack(track);
            })
            video.srcObject = null

            main.removeChild(videoContainer);
            cardContainer.removeChild(card)
        })
    })
})




