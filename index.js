require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");


const app = express();
const PORT = process.env.port || 5000;
const connectToDatabase = require("./config/connection-database");
 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const routes = require("./routes");
// routes(app)

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

async function startServer() {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
