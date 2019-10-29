const PORT = 3000;
const server = require("./index");

//const {db} = require('./db')

//db.sync().then(() => {app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))})

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
