var fs=require("fs");
var data=fs.readFileSync("xy.text");
console.log(data.toString());
console.log("Program Ended");