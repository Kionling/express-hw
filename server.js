var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8000;


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

app.post("/api/notes", function(req, res) {
    var newNote = req.body;
    var note = fs.readFileSync("./db/db.json");
    newNote.id = String(note.length);
    note = JSON.parse(note);
    note.push(newNote);
    fs.writeFileSync("./db/db.json",JSON.stringify(note));
    res.json(note);
})

app.delete("/api/notes/:id", function(req, res){
    var noteId = req.params.id;
    notes = fs.readFileSync("./db/db.json");
    notes = JSON.parse(notes);
    notes = notes.filter(function(note){
        if (noteId === note.id){
            return false;
        }else{
            return true;
        }
    })
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });