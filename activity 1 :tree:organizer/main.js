
 let inputarr= process.argv.slice(2);
 let command = inputarr[0];

 
if(command == "help"){
    let helpobj = require("./command/help");
    helpobj.helpfxn();
}
if(command == "tree"){
    let treeobj = require("./command/tree");
    treeobj.treefxn(inputarr[1]);
    
}
if(command == "organize"){
    let organizeobj = require("./command/organize");
    organizeobj.organizefxn(inputarr[1]);
}