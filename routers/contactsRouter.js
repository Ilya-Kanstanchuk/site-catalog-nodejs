import { Router } from "express";
import contactsController from "../controllers/contactsController.js";

export const contactsRouter = new Router();

contactsRouter.get("/contacts", contactsController.getContactsPage);