const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Conexion a MongoDB exitosa: ${conn.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB