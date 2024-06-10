export class Book {
    private isbn: string;
    private title: string;
    private author: string;
    private publicationYear: number;

    constructor(isbn: string, title: string, author: string, publicationYear: number) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }

    // Getter methods
    public getISBN(): string {
        return this.isbn;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getPublicationYear(): number {
        return this.publicationYear;
    }

    // Setter methods (optional, depending on your requirements)
    public setISBN(isbn: string): void {
        this.isbn = isbn;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public setAuthor(author: string): void {
        this.author = author;
    }

    public setPublicationYear(publicationYear: number): void {
        this.publicationYear = publicationYear;
    }
}
