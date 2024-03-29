import express, {Express, Request, Response} from "express";




// Instantiate express app

const app: Express = express();


//define server port
const port = 3200;



//create a default route
app.get('/', (req:Request, res:Response) => {
    res.send('Express + TypeScript Server');
  })
//get incoming request will be handls by this  function

//start listening to the requests on the defined port
app.listen(port);
