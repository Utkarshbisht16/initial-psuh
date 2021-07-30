let path = require("path");
let fs = require("fs");

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', "deb"]
}


function organizefn(scn){
 
  let pathofmain = scn;
  let content = fs.readdirSync(pathofmain);
  let n = content.length;

  let newfolderpath = path.join(pathofmain,"organize folder");
  fs.mkdirSync(newfolderpath);

  let mediapath = path.join(newfolderpath,"media");
  let archivespath = path.join(newfolderpath,"archives");
  let documentspath = path.join(newfolderpath,"documents");
  let apppath = path.join(newfolderpath,"apps");
  fs.mkdirSync(mediapath);
  fs.mkdirSync(archivespath);
  fs.mkdirSync(documentspath);
  fs.mkdirSync(apppath);
  


  for (let i= 0 ; i < n ; i++){
    let filename = content[i];
    let fileext = getFileExtension(filename);
    let scrfilepath = path.join(pathofmain,filename);
    
    for(let x in types){
      for (let j = 0 ; j < types[x].length; j++){
          let temp = types[x][j];
          if(fileext == temp ){
            mainwork(scrfilepath, newfolderpath,x);
          }
      }
    }
  }

    
}

function mainwork(scrfilepath, newfolderpath, x){
  
  let finaldespath = path.join(newfolderpath,x);
  let nameoffile = path.basename(scrfilepath);
  let FDP = path.join(finaldespath, nameoffile);
  fs.copyFileSync(scrfilepath, FDP);
}


function getFileExtension(filename){
  let arr = [];
  arr = filename.split(".");
  return arr[arr.length - 1];
}


module.exports = {
    organizefxn: organizefn,
}

