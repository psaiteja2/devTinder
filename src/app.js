const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")
console.log("hello");

app.post("/signup", async (req,res)=>{

    const userObj ={
        firstName : "Teja",
        lastName : "Pavuluri",
        emailId : "saiteja@gmail.com",
        password: "teja"
    }
    // Creating a new instance of the user model
const user = new User(userObj);
await user.save();
res.send("user added sussfully");
})

connectDB().then(() => {
    console.log("Database connection established..");

    app.listen(8888, ()=>{
        console.log("Server is successfully listening on port 3000");
    });

})
.catch((err) => {
    console.error("Database cannot be conneted!!!")
});

