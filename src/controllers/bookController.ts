import { Request, Response } from "express";
import { Book } from "../models/book";

export class BookController {

    // Array to store book
    private bookList: Book[] = [];

    constructor() {
        // initial 
        this.bookList = [];

        // bind method to the class
        this.getBooks = this.getBooks.bind(this);
        this.addNewBook = this.addNewBook.bind(this);


    }

    // Method to get all book
    public getBooks = (req: Request, res: Response): void => {
        res.json(this.bookList);
    }

    // Method to push a new todo
    public addNewBook = (req: Request, res: Response) => {
        const { title, author, publicYear, isbn } = req.body;

        const book = new Book(isbn, title, author, publicYear);

        this.bookList.push(book);

        res.json(this.bookList);
    }

}