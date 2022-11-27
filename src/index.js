import app from "./app";

//funcion principal, ejecucion del servidor Node

const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
};

main();