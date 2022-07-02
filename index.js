const express = require("express");

const {json} = require("express");

const app =  express();

app.use(json());

const flight = require("./routes/flightRoute");
app.use("/flight", flight);

const PORT = process.env.PORT || 3000;
app.get("/",(req, res)=>{
  res.send("Zuri Training");
});

app.listen(PORT, () => console.log('Serving on port ${PORT}'));