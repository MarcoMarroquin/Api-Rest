import { Router } from "express";
import { methods as LanguageController } from "./../Controllers/language.controller";

// Mapeo de Controladores Contacto

const router = Router();

router.get("/ListaContactos/", LanguageController.getContactos);
router.post("/AgregarContacto/", LanguageController.addContacto);   


export default router;