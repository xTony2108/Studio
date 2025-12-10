const mongoose = require("mongoose");
const { EventEmitter } = require("events");

class Server extends EventEmitter {
  async connect() {
    const { DB_CONNECTION_URI, DB_NAME } = process.env;
    if (!DB_CONNECTION_URI) {
      console.log("URI NON DEFINITO");
      return;
    }
    try {
      await mongoose.connect(DB_CONNECTION_URI, {
        dbName: DB_NAME,
      });
      console.log("Connessione al db effettuata con successo");
      this.emit("ready");
    } catch (error) {
      this.emit("err", error);
    }
  }
}

const server = new Server();

const models = {
  User: require("./models/User"),
};

module.exports = { server, ...models };
