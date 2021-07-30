
let path = require("path");
let fs = require("fs");

function treefn(scn){
    let pathofmain = "";
    if(scn == undefined){
        pathofmain = process.cwd();
     }
    else{
         pathofmain = scn;
    }

    let content = fs.readdirSync(pathofmain);
    let n = content.length;
    let mainfolder = path.basename(pathofmain);
    mainfolder = "↳" + mainfolder;


        for (let i= 0 ; i < n ; i++){
            mainfolder = mainfolder + "\n\t" + "↳" + content[i];
         }      
         console.log(mainfolder);
    }
  module.exports = {
      treefxn: treefn
  }
