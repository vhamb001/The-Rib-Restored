export interface BookFormat {
  type: "Ebook" | "Paperback" | "Hardcover";
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
  category?: "Adult" | "Children";
  formats: BookFormat[];
}

export const books: Book[] = [
  {
    id: "watchwoman",
    title: "Watchwoman's Dream Book",
    subtitle: "Volume One",
    description:
      "A prophetic journey through dreams and divine revelation. This book walks you through the sacred art of dream interpretation, helping you decode the messages God sends in the night season.",
    cover: "/images/books/watchwomans-dream-book.jpg",
    status: "Available",
    category: "Adult",
    formats: [
      { type: "Ebook", url: "#", price: "$9.99" },
      { type: "Paperback", url: "#", price: "$14.99" },
      { type: "Hardcover", url: "#", price: "$24.99" },
    ],
  },
  {
    id: "scroll",
    title: "The Prophetic Dreamer's Scroll",
    subtitle: "Volume One",
    description:
      "Divine dreams. Hidden messages. Kingdom understanding. A guided companion for prophetic dreamers to document, interpret, and preserve the revelations received in the night watches.",
    cover: "/images/books/prophetic-dreamers-scroll.jpg",
    status: "Available",
    category: "Adult",
    formats: [
      { type: "Ebook", url: "#", price: "$9.99" },
      { type: "Paperback", url: "#", price: "$14.99" },
      { type: "Hardcover", url: "#", price: "$24.99" },
    ],
  },
  {
    id: "childrens-dreams",
    title: "Little Dreamers",
    subtitle: "Children's Corner",
    description:
      "A beautifully illustrated guide to help children understand their dreams and God's voice in the night season. Perfect for bedtime reading and family discipleship.",
    cover: "/images/books/coming-soon-blue.jpg",
    status: "Coming Soon",
    category: "Children",
    formats: [],
  },
  {
    id: "more-revelations",
    title: "More Revelations Coming Soon",
    subtitle: "",
    description:
      "New writings. New revelations. More kingdom insight. Stay tuned for upcoming releases.",
    cover: "/images/books/coming-soon-blue.jpg",
    status: "Coming Soon",
    category: "Adult",
    formats: [],
  },
];
