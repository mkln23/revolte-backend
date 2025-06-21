const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/v1/home", (req, res) => {
  res.json({
    message: "Hello user!",
  });
});

app.post("/api/v1/user", (req, res) => {
  console.log(req.body)
  res.json({
    message: `User ${req.body.user} added successfully!`,
  });
});

app.listen(PORT, () => {
  console.log(`Serve live at ${PORT}`);
});
