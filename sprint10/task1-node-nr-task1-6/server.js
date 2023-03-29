import express from "express";

const app = express(); 

const getCurrentDate = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
}
// Check to see if custom -i and -t arguments are present
const intervalIndex = process.argv.indexOf('-i');
const stopTimeIndex = process.argv.indexOf('-t');

// if there is no -i flag, interval will be = 1 sec
let interval = intervalIndex > -1 ? process.argv[intervalIndex + 1] : 1000; // get the value after -i
// if there is no -t flag, stopping time will be = 0
let stopTime = stopTimeIndex > -1 ? process.argv[stopTimeIndex + 1] : 0; 

app.get('/', (req, res) => {
    const intervalId = setInterval(() => {
        console.log(getCurrentDate());
    }, interval);
    
    setTimeout(() => {
        clearInterval(intervalId);
        res.send(getCurrentDate());
    }, stopTime)
})


app.listen(3000, () => {
    console.log(`app listening on port 3000`)
});