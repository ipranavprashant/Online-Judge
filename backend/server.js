if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const connectToMongo = require("./config/connectToMongo");
const requireAuth = require("./middleware/requireAuth");
const userController = require("./routes/userController");

const app = express();

app.use(express.json({ limit: "500mb" }));
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

connectToMongo();

app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/logout", userController.logout);
app.get("/fetchuser/:id", userController.fetchUser);
app.get("/check-auth", requireAuth, userController.checkAuth);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
