// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
     id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      category: [" JavaScript,  ", " CSS "],
      img: "https://res.cloudinary.com/dnvq1ffot/image/upload/v1688934502/cld-sample-5.jpg",
      author: "Navarro"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      category: ["JAVASCRIPT, ", " CSS"],
      img: "https://res.cloudinary.com/dnvq1ffot/image/upload/v1688934502/cld-sample-5.jpg",
      author: "Navarro"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      category: ["JavaScript ", " CSS"],
      img: "https://res.cloudinary.com/dnvq1ffot/image/upload/v1688934502/cld-sample-5.jpg",
      author: "Navarro"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      category: ["JavaScript", "CSS"],
      img: "https://res.cloudinary.com/dnvq1ffot/image/upload/v1688934502/cld-sample-5.jpg",
      author: "Navarro"
    },
  ]);
}
