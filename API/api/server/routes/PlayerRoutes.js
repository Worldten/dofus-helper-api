import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = Router();

router.get('/', PlayerController.getAllPlayers);
router.post('/', PlayerController.addPlayer);
router.get('/:id', PlayerController.getAPlayer);
router.put('/:id', PlayerController.updatedPlayer);
router.delete('/:id', PlayerController.deletePlayer);

export default router;