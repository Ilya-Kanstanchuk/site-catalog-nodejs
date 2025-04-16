import { Router } from "express";
import mainController from "../controllers/mainController.js";

export const mainRouter = new Router();

mainRouter.get("/", mainController.getMainPage);