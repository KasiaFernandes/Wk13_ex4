var fs = require("fs");

fs.readdir("../", "utf-8", function(err, data){
    if (err) throw err;
    fs.writeFile("./tekst.txt", data.join("\n"), "utf-8", function(err) {
        if (err) throw err;
        console.log(data);
    })
});

