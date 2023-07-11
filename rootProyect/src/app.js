const { server } = require("./index.js");

const port = process.env.PORT || 8080

server.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});