const fs = require("fs");

fs.readFile("file1.txt", (err, data) => {
    if(err) throw err;
    console.log(data);
    fs.unlink("file1.txt", (unlinkErr) => {
        if(unlinkErr) throw unlinkErr;
        console.log("Arquivo excluido com sucesso");
    });
});
