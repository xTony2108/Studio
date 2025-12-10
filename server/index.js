//CONFIG
require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { morganLogger } = require("./middlewares/logger/morganLogger");

app.use(morganLogger);

app.use(helmet());
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// ROUTES
const apiRoute = require("./routes");

app.use("/api", apiRoute);

// CONNECTION

const { server } = require("./db");

server.on("ready", () => {
  const { SERVER_PORT } = process.env;

  app.listen(SERVER_PORT, (err) => {
    if (err) {
      console.error("Errore durante l'avvio del server:", err);
      return;
    }

    console.log(`SERVER IN ASCOLTO SULLA PORTA ${SERVER_PORT}`);
  });
});

server.on("err", (err) => {
  console.error("Errore di connessione al DB:", err.message);
});

server.connect();
