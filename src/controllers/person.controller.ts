import { Router, Request, Response, NextFunction } from 'express';
import {Person} from '../models/Person';

const router: Router = Router();

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await Person.findById(req.params.id));
  } catch (error) {
    next(error)
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send(await Person.findAll());
    } catch (error) {
      next(error)
    }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await Person.create(req.body));
  } catch (error) {
    next(error)
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await Person.update(req.body,{where: {id: req.params.id}}));
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(await Person.destroy({where: {id: req.params.id}}));
  } catch (error) {
    next(error)
  }
});

export const PersonController: Router = router;