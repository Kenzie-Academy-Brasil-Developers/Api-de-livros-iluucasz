import { Router } from "express";
import { isBookNameValid, IsBookIdValid } from "../middlewares/books.middlewares";
import { BooksControllers } from "../controllers/books.controllers";

export const routerBooks = Router();

routerBooks.post("/", isBookNameValid.execute, BooksControllers.createBook);

routerBooks.get("/", BooksControllers.getBooks);

routerBooks.get("/:id", IsBookIdValid.execute, BooksControllers.getOneBook);

routerBooks.patch("/:id", IsBookIdValid.execute, isBookNameValid.execute, BooksControllers.updateBook);

routerBooks.delete("/:id", IsBookIdValid.execute, BooksControllers.deleteBook);