const mongoose = require("mongoose");
const  connectDB = async () => {
   await  mongoose.connect("mongodb+srv://pavulurisaiteja5:Hansini%405030@namastenodejs.izced.mongodb.net/devTinder");

};
module.exports = connectDB;
