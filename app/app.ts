// lib/app.ts
import express = require('express');
import bodyParser = require('body-parser');
import translate = require('./translate');

// Create a new express application instance
const app: express.Application = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/view/home/index.html');
});

app.post('/', async (req, res) => {
  //console.log(req.body.name);

  let text: string = await translate.transalte(req.body.name);

  console.log(text);

  res.redirect("#" + text);
});