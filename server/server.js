const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { WordModel } = require("./Schema");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server has started on ${port} `);
});

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

connectToDB();

app.get("/", (req, res) => {
  console.log("Welcome to WordBank API");
});

app.get("/api/words", async (req, res) => {
  try {
    const words = await WordModel.find();
    if (!words) {
      res.status(404).send(words);
    }
    res.status(200).send(words);
  } catch (error) {
    res.status(500).json({ status: "Error", error: error.message });
  }
});

app.post("/api/add-word", async (req, res) => {
  try {
    const word = new WordModel(req.body);

    await word.save();
    res
      .status(201)
      .send({ status: "Success", message: "Word added successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/api/delete-word/:id", async (req, res) => {
  try {
    const word = await WordModel.findByIdAndDelete(req.params.id);
    if (!word) {
      res.status(404).send({ status: "Error", message: "Word not found" });
    }
    res.status(200).send({ status: "Success", message: "Word deleted" });
  } catch (error) {
    res.status(500).send({ status: "Error", Error: error });
  }
});

app.put("/api/update-word/:id", async (req, res) => {
  try {
    const word = await WordModel.findByIdAndUpdate(req.params.id, req.body);
    if (!word) {
      res.status(404).send({ status: "Error", message: "Word not found" });
    }
    res.status(200).send({ status: "Success", message: "Word updated" });
  } catch (error) {
    res.status(500).send({ status: "Error", Error: error });
  }
});
