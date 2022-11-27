import { config } from "dotenv";

config();   // Datos de conexion se encuentran en el archivo  '.env' :)
export default {
    host: process.env.HOST || "",
    database:process.env.DATABASE || "",
    user:process.env.USER || "",
    password: process.env.PASSWORD || "",
    port: process.env.PORT || ""
};