require("dotenv").config();
const cors = require("cors");
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const authCtrl = require('./controller/authController')
const { PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();
app.use(express.static(__dirname + "/../build"));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
  app.listen(PORT, () => console.log(`running on port ${PORT}`));
});

//Auth Endpoints 
app.post("/api/register", authCtrl.register);
app.post('/api/login', authCtrl.login)
app.get('/api/me', authCtrl.getUser)
app.post('/api/logout', authCtrl.logout)

