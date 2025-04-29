import "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let teaData = [];
let nextId = 1;

// Add a new tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// Get all teas
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

// Get tea by id
app.get("/teas/:id", (req, res) => {
  // <-- fixed route
  const tea = teaData.find((t) => t.id === parseInt(req.params.id)); // <-- fixed parseInt
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  res.status(200).send(tea);
});

// Update tea
app.put("/teas/:id", (req, res) => {
  // <-- fixed route
  const tea = teaData.find((t) => t.id === parseInt(req.params.id)); // <-- fixed parseInt
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea); // <-- fixed status
});

// Delete tea
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  return res.status(204).send("deleted");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at port: ${port}...`);
});
