import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import { dirname } from "path";
import { fileURLToPath } from "url";
let input = "none"
app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));
// showing static files
app.use(express.static(__dirname + '/public'));
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  input = req.body.input
  res.render("end.ejs", {input:input});
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});