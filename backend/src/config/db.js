const mongoose = require("mongoose");

const option = {
  autoIndex: false, // Don't build indexes  
  // If not connected, return errors immediately rather than waiting for reconnect
  //geting rid off the depreciation errors
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const conectarDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, option)
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(`mongoDB conectado en: ${url}`)
  } catch (error) {
    console.log(`error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = conectarDB




// import mongoose from "mongoose";

// const conectarDB = async () => {
//   try {
//     const connection = await mongoose.connect(
//         process.env.MONGO_URI_LOCAL, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true
//         }
//       )
//       const url = `${connection.connection.host}:${connection.connection.port}`
//       console.log(`mongoDB conectado en: ${url}`)
//   } catch (error) {
//    console.log(`error: ${error.message}`) 
//    // es para forzar que el proceso termine
//    process.exit(1)
//   }
// }

// export default conectarDB

