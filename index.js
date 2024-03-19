const express = require('express');

// Instantiate express app

const app = express();
//defines lot of methods

//define server port
const port = 3200;

//create a default route
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  })
//get incoming request will be handls by this  function

//start listening to the requests on the defined port
app.listen(port);
