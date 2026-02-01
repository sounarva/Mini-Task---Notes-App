const mongoose = require('mongoose')

// Database Connection
function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("DB Connected Sucessfully")
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = connectToDB