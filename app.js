const express = require("express");
const cors = require("cors");
const authRoutes = require("./src/infrastructure/routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 
// Rutas
app.use("/login", authRoutes); 

app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
