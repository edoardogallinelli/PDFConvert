const http = require('http');
const fs = require("fs");
const pdf2html = require('pdf2html');

const testFolder = './sources/';

async function convertPdf(file) {
    try {
        const html = await pdf2html.html(`./sources/${file}`); 
        fs.writeFileSync(`./results/${file}.html`, html);
        // console.log(html);
    } catch (error) {
        console.log(error);
    }

}

async function main() {
    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
            convertPdf(file)
        });
    });

}

main()


