import booksData from "../../content/data/books.json";

export interface BookFormat {
  type: "Ebook" | "Paperback" | "Hardcover" | "PDF";
  url: string;
  price?: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  status: "Available" | "Coming Soon";
  category?: "Adult" | "Children" | "Teen" | "Youth" | "Women" | "Men" | "Elderly";
  formats: BookFormat[];
}

export const books: Book[] = booksData as Book[];
