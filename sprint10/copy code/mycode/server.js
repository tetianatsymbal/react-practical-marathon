import express from "express";

const app = express();

//convert the date from one digit "2" to the format "02"

const padTo2Digits = (num) =>{
 return num.toString().padStart(2, '0');
}

// convert the date and time to the following format "15.02.2023, 16:25:12"

const formatDate = (date) => {
 return (
   [
    padTo2Digits(date.getUTCDate()),
    padTo2Digits(date.getUTCMonth() + 1),
     date.getFullYear(),
   ].join('.') +
   ', ' +
   [
     padTo2Digits(date.getUTCHours()),
     padTo2Digits(date.getUTCMinutes()),
     padTo2Digits(date.getUTCSeconds()),
   ].join(':')
 );
}

const getCurrentDate = () => {
 return formatDate(new Date());
}


// Check to see if custom -i and -t arguments are present
const intervalIndex = process.argv.indexOf('-i');
const stopTimeIndex = process.argv.indexOf('-t');

// if there is no -i flag, interval....
let interval = process.argv[intervalIndex + 1]; // get the value after -i
// if there is no -t flag, stopping time will be = 0
let stopTime = stopTimeIndex > -1 ? process.argv[stopTimeIndex + 1]: 0; // Retrieve the value after -t


// i don't know if this will be used

// app.use((req, res, next)=> {
//  next();
// });


app.get('/', (req, res)=> {
 let intervalId = setInterval(() => {
  console.log(getCurrentDate())
 }, interval);

 setTimeout(() => {
  clearInterval(intervalId);
  // intervalId = null;  --- ?? we need this?
  res.send(getCurrentDate());
 }, stopTime);
});

app.listen(3000);