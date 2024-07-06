fs=require("fs");
fs.readFile("xy.text",function(err,data){
    if(err)
        return console.err(error);
    console.log(data.toString());
});
console.log("Program Ended");