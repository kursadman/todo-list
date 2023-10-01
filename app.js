import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var arr= [];
app.get("/",(req,res)=>{
var options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
};
var today  = new Date();

res.render("list.ejs",{date:today.toLocaleDateString("en-US"), list:arr});


});
app.post("/",(req,res)=>{
var item = req.body.newItem;
arr.push(item);
res.redirect("/");
});

app.listen(3000, (req,res)=>{
console.log("Server started on port 3000");
});