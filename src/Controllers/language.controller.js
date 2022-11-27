import { getConnection } from "./../database/database"; // importacion de conexion a la base de datos

//Consultar Todos los datos :) 

const getContactos = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT Id_Contacto,Nombre_Contacto,Telefono_Contacto,Correo_Contacto FROM Contacto");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};

// Agregar un Registro  

const addContacto = async(req, res) => {

    try {
        const {Nombre_Contacto, Telefono_Contacto, Correo_Contacto} = req.body;
        if(Nombre_Contacto ==undefined || Telefono_Contacto == undefined || Correo_Contacto == undefined)
        {
            res.status(400).json({message: "Solicitud incorrecta. Por favor complete todos los campos" });
        }
        const Contacto={Nombre_Contacto, Telefono_Contacto, Correo_Contacto}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Contacto SET ?", Contacto)
        res.json([{message: "Registro Insertado"},result]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }

};




// Exportacion  de Methos de API - Rest 

export const methods = {
    getContactos,
    addContacto
};

