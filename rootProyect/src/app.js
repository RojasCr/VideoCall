const { server } = require("./index.js");

const port = process.env.PORT || 8080

//const myPeer = new Peer();

//console.log(myPeer.id)

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});