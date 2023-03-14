const http = require('http');
const fs = require("fs");
// const pdf2html = require('pdf2html');
const { PDFNet } = require('@pdftron/pdfnet-node');  // you may need to set up NODE_PATH environment variable to make this work.
// const PDFTronLicense = require('../LicenseKey/LicenseKey');



const testFolder = './sources/';
// const fs = require('fs');

// async function httpRequest(url) {
//     return new Promise(function (resolve, reject) {
//         let data = "";

//         const options = {
//             port: 80,
//             method: 'GET'
//         }

//         const req = http.request(url, options, res => {

//             res.on('data', (chunk) => {
//                 data += chunk.toString();
//             })

//             res.on("end", () => {
//                 resolve(data);
//             })

//         })

//         req.on('error', error => {
//             reject(error)
//         })

//         req.end()
//     })
// }
/**
 * 
 * @param {string} testo 
 */
// function CorreggiHtml(testo, uniqueName) {
//     try{
//         var regex = new RegExp(/(<a[\r\s\S]*?<\/a>)([\r\s\S]*?)<a/g);
//     // console.log(testo.match(/\<textUnit name="Testo Html" type="Testo Html">[\r\s\S]*?CDATA\[([\r\s\S]*?)\\]\]></text/g));
//     let unitValue = testo.match(/<textUnit name="Testo Html" type="Testo Html">[\r\s\S]*?CDATA\[([\r\s\S]*?)\]\]><\/text/)[1]; //uno si e uno no ma con br
//     fs.writeFileSync(`./sources/${uniqueName}-${new Date().getTime()}.html`, unitValue);
//     unitValue = "<style>hr{border: none;}</style>\n" + unitValue.replace(/<br \/>/g, "<hr />");
//     fs.writeFileSync(`./results/${uniqueName}.html`, unitValue);
//     }catch(e){
//         console.log("error"+uniqueName);
//     }


//     //console.log(unitValue.match(regex));

// }

// async function convertFile(file) { 

//     const html = await pdf2html.html(file);
//     console.log(html);
// }

async function convertPdf(file){
    try {
        await PDFNet.Convert.fileToHtml(`./sources/${file}`, `${file}.html`);
        
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
            fs.writeFileSync(`./results/${file}.html`, '' );
            console.log(file, 'creato nella dir Results');
             convertPdf(file)
        });
    });

}

PDFNet.runWithCleanup(main, 'demo:1675940450703:7d2ba1df030000000067a048d217840ac29eb13dc8f6ca8227e479e027');


/* 
pdf2html.convert('input.pdf', 'output.html', function(err) {
  if (err) return console.error(err);
  console.log('Conversion completed successfully');
});
 */