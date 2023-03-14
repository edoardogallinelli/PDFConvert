const http = require('http');
const fs = require("fs");
const pdf2html = require('pdf2html');
// const { PDFNet } = require('@pdftron/pdfnet-node');  // you may need to set up NODE_PATH environment variable to make this work.
// const PDFTronLicense = require('../LicenseKey/LicenseKey');



const testFolder = './sources/';

async function convertPdf(file) {
    try {
        // pdf2html.html(`./sources/${file}`, `./results/${file}.html`, function (err) {
        //     if (err) return console.error(err);
        //     console.log('Conversion completed successfully');
        // });


        const html = await pdf2html.html(`./sources/${file}`); 
        fs.writeFileSync(`./results/${file}.html`, html);
        // console.log(html);
    } catch (error) {
        console.log(error);
    }

}

async function main() {
    // for (const element of JSON.parse(fs.readFileSync("./sources"))) {
    //     let response = await httpRequest("http://services.portale.rai.it/renderingservice/rainettemplate/GetParentsServlet?uniqueName=" + element.uniqueName + "&bean=cmsCacheReady");
    //     CorreggiHtml(response, element.uniqueName);
    // }

    fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
            // console.log(file, 'creato nella dir Results');
            convertPdf(file)
        });
    });

}

main()


/* 
pdf2html.convert('input.pdf', 'output.html', function(err) {
  if (err) return console.error(err);
  console.log('Conversion completed successfully');
});
 */