import { Router, Request, Response, NextFunction } from 'express';
import {Person} from '../models/Person';

const router: Router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await Person.findAll());
    } catch (error) {
      next(error)
    }
});

export const PersonController: Router = router;