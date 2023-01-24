const fs = require('fs')
const readline = require("readline-sync");
let main_file = String(readline.question("Enter File Name With Extention TO Copy:"));
let noOfTimes = Number(readline.question("No. of time to copy ?"))

for (let index = 0; index <=noOfTimes; index++) {

     fs.copyFile(main_file, `${main_file} - copying${(index==0)?'': (index)}.txt`, fs.constants.COPYFILE_FICLONE, err => {
            if (err) {
                console.error(err)
            }

            console.log(`File has been copied`);
        });
    
}
       
