import * as express from 'express';
import {sequelize} from './utils/sequelize';

import {WelcomeController} from './controllers';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.use('/welcome', WelcomeController);

app.listen(port, async () => {
  await sequelize.sync({force: true});
  console.log(`Listening at http://localhost:${port}/`);
});
