const express = require('express');
const app = express();
const fs = require('fs');
var content = "";

content = `<meta charset="UTF-8">`

let folder = (err, files) => {
        if (err) throw err;
        let f = files.length;
        for (i = 0; i < f; i++) {
            // Please change the Directory path to work in different systems
            var stats = fs.statSync(`C:/Users/Surya/Downloads/${files[i]}`);
            if (stats.isFile()) {
                  
                content+=`<p> &#128221; ${files[i]}</p>`;
            } else{
                    
                content+=`<p>&#128213; ${files[i]}</p>`;
            } 
        } 
};
// Please change the Directory path to work in different systems
fs.readdir('C:/Users/Surya/Downloads/', "utf8", folder);
app.get('/', (req, res) => {
    res.send(content);
});
app.listen(3000, () => {
    console.log('Server started at port 3000.......')
});