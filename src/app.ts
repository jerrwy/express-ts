import * as express from 'express';
import * as bodyParser from 'body-parser';
import {sequelize} from './sequelize';

import {WelcomeController,PersonController} from './controllers';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '5mb'}));

app.use('/welcome', WelcomeController);
app.use('/person', PersonController);

app.listen(port, async () => {
  await sequelize.sync();
  console.log(`Listening at http://localhost:${port}/`);
});


process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});