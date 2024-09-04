import express from "express";

// const express = require('express');
const app = express();

//static assets
app.use(express.static("dist")); //middleware

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });



//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      text: "Why did the chicken cross the road 1?",
      punchline: "To get to the other side! punchline 1"
    },
    {
      id: 2,
      text: "Why did the chicken cross the road 2?",
      punchline: "To get to the other side! punchline 2"
    },
    {
      id: 3,
      text: "Why did the chicken cross the road 3?",
      punchline: "To get to the other side! punchline 3"
    },
    {
      id: 4,
      text: "Why did the chicken cross the road 4?",
      punchline: "To get to the other side! punchline 4"
    },
    {
      id: 5,
      text: "Why did the chicken cross the road 5?",
      punchline: "To get to the other side! punchline 5"
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
