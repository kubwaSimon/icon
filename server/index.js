const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ClientModel = require("./models/Client"); //mongoose model

//loading variable components
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
//loading API middleware
app.use(express.json()); //parsing json requests
app.use(cors());
//database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Established:! Proceeding..."))
  .catch((err) => console.error("Error connecting to Database! Recheck..", err)
  );
//contact route
app.post("/contact", async (req, res) => {
  try {
    //new client data creation-record
    const client = await ClientModel.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    console
    .error(err);
    res.status(500).json({ message: "Failed to submit message", error: err });
  }
});

//starting server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
