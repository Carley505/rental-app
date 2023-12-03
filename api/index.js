
import express from "express";

const app = express();

app.get("/",(req, res)=>{
    res.send({
        "name": "Sam"
    })
})


const PORT = 3100;
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}...!!!`)
});