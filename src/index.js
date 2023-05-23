const express = require("express")
const route = require("./routes/route")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://stuti3007:w14E1dmx6wAE1h7i@cluster0.rrvbnsb.mongodb.net/url-shortner",
{useNewUrlParser:true}
)
.then(()=>console.log("mongoose connected successfully"))
.catch((err)=>err)

app.use("/",route)

app.listen(process.env.PORT||3001,function(){
    console.log("express is running port" + (process.env.PORT||3001) )
})