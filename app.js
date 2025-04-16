import express from "express"
import url from "url"
import path from "path"
import mongoose from "mongoose";
import { mainRouter } from "./routers/mainRouter.js";
import { contactsRouter } from "./routers/contactsRouter.js";
import { catalogRouter } from "./routers/catalogRouter.js";

mongoose.connect(process.env.URI)
    .then((result) => app.listen(port, ()=>{
        console.log(`web site is running on the port: ${port}`);
    }))
    .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT;
const _filename = url.fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, "public")));

app.use(mainRouter);
app.use(contactsRouter);
app.use(catalogRouter);