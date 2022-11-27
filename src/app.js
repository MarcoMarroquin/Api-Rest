import express from "express";
import morgan from "morgan";
const cors = require("cors");

//routes

import LanguageRoutes from "./routes/language.routes";

const app=express();

//configuracion de Puerto

app.set("port",4000);

//Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Routes del Api Beta
app.use("/api/contacto",LanguageRoutes);

export default app;
