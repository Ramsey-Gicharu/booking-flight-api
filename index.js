const express = require("express");
const {json} = require("express");

const app =  express();

const PORT = process.env.PORT || 3000;

app.get("/",(req, res)=>{
  res.send("Zuri Training");
});

app.listen(PORT, () => console.log('Serving on port ${PORT}'));