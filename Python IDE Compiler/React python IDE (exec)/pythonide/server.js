const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;


app.use(cors()); // Add this line to enable CORS
app.use(bodyParser.json());

app.post("/execute", (req, res) => {
  const code = req.body.code;

  exec(`python -c "${code}"`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ output: "An Server error occurred." });
      return;
    }

    const output = stdout || stderr;
    res.json({ output });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
