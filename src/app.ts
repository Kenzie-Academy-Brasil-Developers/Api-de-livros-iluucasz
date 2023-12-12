import express, { json } from "express";
import { routerBooks } from "./routers/books.routes";
import { HandleErrors } from "./Errors/handleErrors.middleware";

export const app = express();

app.use(json());
app.use("/books", routerBooks);
app.use(HandleErrors.execute);