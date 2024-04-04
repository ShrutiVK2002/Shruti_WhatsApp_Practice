import express from "express";


const app = express();
const port = 4000;


app.get("/", (req, res) => {           //  "/" :- homeroute
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);

});

app.get("/homepage" ,(req , res) => {
    res.send("This is homepage");
})

app.get("/aboutus" , (req, res) =>{
    res.send("This is About Us")
})

app.get("/API/webhook" , (req, res)=>{
    res.send("This is API & WebHooK")
})

