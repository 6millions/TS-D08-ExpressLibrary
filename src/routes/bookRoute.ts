import express, { Request, Response } from "express";
import { BookController } from "../controllers/bookController";

const routes = express.Router();

const bookController = new BookController();

// Mapping routes for adding a new todo
routes.post('/add', bookController.addNewBook);

// mapping routes for get all todos
routes.get('/', bookController.getBooks);


export default routes;