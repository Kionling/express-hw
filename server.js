const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//functions start here
//also router mapping

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.post("api/notes/", function(req, res) {
    var newNote = req.body;
    var notes = fs.readFileSync("./db/db.json");
    newNote.id = String(note.length);
    note = JSON.parse(note);
    note.push(newNote);
    fs.writeFileSync("./db/db.json",JSON.stringify(notes));
    res.json(note);
} )










app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });