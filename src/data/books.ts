export interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  status: "Available" | "Coming Soon";
  amazonUrl: string;
}

export const books: Book[] = [
  {
    id: "watchwoman",
    title: "Watchwoman’s Dream Book",
    subtitle: "Volume One",
    description: "A prophetic journey through dreams and divine revelation.",
    cover: "/images/books/watchwomans-dream-book.jpg",
    status: "Available",
    amazonUrl: "#",
  },
  {
    id: "scroll",
    title: "The Prophetic Dreamer’s Scroll",
    subtitle: "Volume One",
    description: "Divine dreams. Hidden messages. Kingdom understanding.",
    cover: "/images/books/prophetic-dreamers-scroll.jpg",
    status: "Available",
    amazonUrl: "#",
  },
  {
    id: "more-revelations",
    title: "More Revelations Coming Soon",
    subtitle: "",
    description: "New writings. New revelations. More kingdom insight.",
    cover: "/images/books/coming-soon-blue.jpg",
    status: "Coming Soon",
    amazonUrl: "",
  },
];
