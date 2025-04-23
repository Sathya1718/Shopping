var express=require("express")
var bodyParser=require("body-parser") 
var mongoose=require("mongoose")

const app=express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb://localhost:27017/Database')
var db=mongoose.connection
db.on('error',()=>console.log("Error in connecting to Database"))
db.once('open',()=>console.log("connected to Database"))
app.get("/",(req,res) => {
res.set({
    "Allow-acces-Allow-orgin":'*'
})
return res.redirect('main.html')
}).listen(4000);

console.log("listening on port 4000")