import { Router } from "express";
import { upload } from "../utils/uploadImage.js";
import catalogController from "../controllers/catalogController.js";

export const catalogRouter = new Router();

catalogRouter.post("/catalog", upload.single("image"), catalogController.postProduct);

catalogRouter.get("/catalog", catalogController.getAllProducts);

catalogRouter.get("/catalog/image/:id", catalogController.findImgById);

catalogRouter.get("/catalog/:id", catalogController.findProductById);

catalogRouter.get("/add", catalogController.loadAddPage);

catalogRouter.delete("/catalog/:id", catalogController.deleteProduct);