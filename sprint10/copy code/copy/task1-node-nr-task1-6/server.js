const express = require("express") //Ігор

const app = express(); //Ігор

app.get('/', (req, res) => {//Ігор
    const intervalId = setInterval(() => {//Ігор
    const now = new Date();//Таня
    const date = now.toLocaleDateString();//Таня
    const time = now.toLocaleTimeString();//Таня
    console.log(`Current date: ${date}`); //Ігор
    console.log(`Current time: ${time}`);//Ігор
    }, process.argv[3]);//Ігор
    
    setTimeout(() => {//Ігор
        clearInterval(intervalId);//Ігор
        const now = new Date();//Таня
        const date = now.toLocaleDateString();//Таня
        const time = now.toLocaleTimeString();//Таня
        res.send(`${date}, ${time}`)//Ігор
    }, process.argv[5])//Ігор
})//Ігор


app.listen(3000, () => {//Ігор
    console.log(`app listening on port 3000`)//Ігор
});//Ігор