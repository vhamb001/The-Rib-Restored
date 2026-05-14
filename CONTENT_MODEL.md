# Content Model

## Books

Create a data file:

```ts
export const books = [
  {
    title: "Watchwoman’s Dream Book",
    subtitle: "Volume One",
    description: "A prophetic journey through dreams and divine revelation.",
    cover: "/images/books/watchwomans-dream-book.jpg",
    status: "Available",
    amazonUrl: "#"
  },
  {
    title: "The Prophetic Dreamer’s Scroll",
    subtitle: "Volume One",
    description: "Divine dreams. Hidden messages. Kingdom understanding.",
    cover: "/images/books/prophetic-dreamers-scroll.jpg",
    status: "Available",
    amazonUrl: "#"
  },
  {
    title: "More Revelations Coming Soon",
    subtitle: "",
    description: "New writings. New revelations. More kingdom insight.",
    cover: "/images/books/coming-soon-blue.jpg",
    status: "Coming Soon",
    amazonUrl: ""
  }
]
```

## Writings

Use Markdown or MDX files inside:

```txt
/content/writings/
```

Example frontmatter:

```md
---
title: "The Beauty of Stillness"
date: "2025-05-12"
category: "Reflections"
excerpt: "A reflection on waiting, listening, and aligning with divine timing."
image: "/images/writings/stillness.jpg"
featured: true
---
```

## Projects

Create project cards:

```ts
export const projects = [
  {
    title: "The Rib Restored",
    description: "My personal brand and platform for books, writings, and resources that restore identity and purpose.",
    icon: "crown",
    url: "/"
  },
  {
    title: "Beit Yahweh HaGo’el",
    description: "A house of restoration, healing, and divine purpose.",
    icon: "home",
    url: "#"
  },
  {
    title: "Listen Selah",
    description: "A premium headphone brand created for deep listening and purpose.",
    icon: "headphones",
    url: "#"
  },
  {
    title: "Future Projects",
    description: "Ideas, apps, and ventures assigned to build and impact lives.",
    icon: "lightbulb",
    url: "#"
  }
]
```
