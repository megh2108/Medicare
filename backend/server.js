require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

const authRoute = require("./router/auth-route");
const adminRoute = require("./router/admin-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//old method
// app.use(require('./router/auth'));


const corsOptions = {
  origin: "http://localhost:3005",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

//user route
app.use("/api/auth", authRoute);

//admin route
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

// app.use(cors({
//   origin:"http://localhost:3000",
//   methods:"GET,POST,PUT,DELETE",
//   credentials:true
// }));



const PORT = 6500;

connectDb().then(() => {

  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
