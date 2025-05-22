require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");

const connectDB = require("./utils/db");

const errorMiddleWare = require("./middlewares/error-middleware");

// Handling the cors policy :-
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

const PORT = 4000;

// Define the admin route :-
app.use("/api/admin", adminRoute);

app.use(errorMiddleWare);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Connected to PORT ${PORT}`);
  });
});
