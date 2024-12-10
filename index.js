const express = require("express");
const schoolRoutes = require("./routes/schoolRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", schoolRoutes);

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Server is connected at PORT : ${PORT}`);
});
