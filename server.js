const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

// TimeStamp 

const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, 
    timeZone: 'Africa/Tunis',
}
// GET Request
app.get('/', (req, res) => {
    const now = new Date();
    const TimeStamp = now.toLocaleString('fr-FR', options);
    console.log(`GET http request received at ${TimeStamp}`);
    res.send('<h1>Bienvenue sur votre Backend Express !</h1>');
});

// GET Request with Parameters 
app.get('/salut/:nom', (req, res) => {
    const nom = req.params.nom; 
    res.send(`<h1>Salut ${nom}</h1>`);
});

// POST Request 
app.post('/data', (req, res) => {
    const now = new Date();
    const TimeStamp = now.toLocaleString('fr-FR', options);
    const data = req.body;
    console.log(`Received POST http Request at ${TimeStamp} :`);
    console.log(data);
    res.json({
        message:`POST Request received Successfully at ${TimeStamp}`, 
        dataReceived: data
    });
});

// Start Server 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`you can send GET http requests at following links: \n http://localhost:${port}/ \nhttp://localhost:${port}/salut/your_name`);
    console.log(`you can send POST http requests at http://localhost:${port}/data `);
});





