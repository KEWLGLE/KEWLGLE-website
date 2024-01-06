import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import https from "https";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
// showing static files
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    let url = "https://www.greetingsapi.com/random"
   https.get(url, function(response){
     
    console.log(response.statusCode)
    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      let greeting = weatherData.greeting
      console.log(weatherData.greeting)
      res.render("index.ejs", {greeting:greeting});
     })
   })

});
app.post("/submit", (req, res) => {
  let url = "https://www.greetingsapi.com/random"
   https.get(url, function(response){
     
    console.log(response.statusCode)
    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      let greeting = weatherData.greeting
      console.log(weatherData.greeting)
      console.log(req.body.name)
      console.log(req.body.email)
      let name = req.body.name
      let email = req.body.email
      let content = req.body.text
      fs.writeFile(email+'.txt', email + "  "+ content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
      res.render("alert.ejs", { name:name});
      
     })
   })
  
  
   
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});