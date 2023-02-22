const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
       // console.log(`mongoose.set('strictQuery', true)`)
    }
    catch(err)
    {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB