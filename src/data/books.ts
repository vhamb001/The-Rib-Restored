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
    title: "The Watchwoman’s Dream Book",
    subtitle: "How to Decode Prophetic Dreams, Symbols, Numbers & Spiritual Signs",
    description:
      "A prophetic journey through dreams and divine revelation. This book walks you through the sacred art of dream interpretation, helping you decode the messages God sends in the night season.",
    cover: "/images/books/watchwomans-dream-book.jpg",
    status: "Available",
    category: "Adult",
    formats: [
      { type: "Ebook", url: "https://www.amazon.com/WATCHWOMANS-DREAM-BOOK-Prophetic-Spiritual-ebook/dp/B0H17G39D2", price: "$9.99" },
      { type: "Paperback", url: "https://www.amazon.com/WATCHWOMANS-DREAM-BOOK-Prophetic-Spiritual/dp/B0H1M3GWT6", price: "$19.99" },
      { type: "Hardcover", url: "https://www.amazon.com/WATCHWOMANS-DREAM-BOOK-Prophetic-Spiritual/dp/B0H1QCL8JY", price: "$27.99" },
    ],
  },
  {
    id: "scroll",
    title: "The Prophetic Dreamer’s Scroll",
    subtitle: "Volume X: A Spiritual Awakening Guide",
    description:
      "Divine dreams. Hidden messages. Kingdom understanding. A guided companion for prophetic dreamers to document, interpret, and preserve the revelations received in the night watches.",
    cover: "/images/books/prophetic-dreamers-scroll.jpg",
    status: "Available",
    category: "Adult",
    formats: [
      { type: "Ebook", url: "https://www.amazon.com/Prophetic-Dreamers-Scroll-Spiritual-Awakening-ebook/dp/B0GY9ZX8ZF", price: "$2.99" },
      { type: "Paperback", url: "https://www.amazon.com/Prophetic-Dreamers-Scroll-Completion-Becoming/dp/B0GY3GFW43", price: "$12.99" },
      { type: "Hardcover", url: "https://www.amazon.com/PROPHETIC-DREAMERS-SCROLL-Spiritual-Awakening/dp/B0GZ8B3ZJT", price: "$17.99" },
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
