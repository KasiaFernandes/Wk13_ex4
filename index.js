var fs = require("fs");

fs.readdir("../", "utf-8", function(err, files){
    if (err) throw err;
    fs.writeFile("./tekst.txt", files, "utf-8", function(err) {
        if (err) throw err;
        console.log(files);
    })
});

