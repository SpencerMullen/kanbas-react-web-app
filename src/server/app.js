import "dotenv/config";
import express from "express";
import Hello from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";

mongoose.connect("mongodb://localhost:27017/kanbas", {
});
// On connect console.log
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!!!!");
});
const app = express();
app.use(express.json());
app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3000"
    }
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
app.use(
    session(sessionOptions)
);

UserRoutes(app);
Lab5(app);
Hello(app);
CourseRoutes(app);
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);