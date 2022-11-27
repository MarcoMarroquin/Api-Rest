use dbprensa;

CREATE TABLE Contacto(
	Id_Contacto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre_Contacto VARCHAR(45) NOT NULL,
    Telefono_Contacto VARCHAR(20) NOT NULL,
    Correo_Contacto VARCHAR(70) NOT NULL
);

SELECT Id_Contacto,Nombre_Contacto,Telefono_Contacto,Correo_Contacto FROM Contacto;




