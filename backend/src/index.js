const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const conectarDB = require("./config/db.js")
const prospectoRoutes = require("./routes/prospectoRoutes.js")

const app = express()
app.use(express.json())

dotenv.config()

conectarDB()

const whitelist = [
  process.env.FRONTEND_URL,
]

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Error de cors"))
    }
  }
}

app.use(cors(corsOptions))
app.use("/api/prospectos", prospectoRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`)
})





