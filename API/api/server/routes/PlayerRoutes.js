import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

var authController = require("../controllers/AuthController")
const router = Router();

router.get('/', PlayerController.getAllPlayers);
router.post('/', PlayerController.addPlayer);
router.post('/login', PlayerController.signIn);
router.get('/:id', PlayerController.getAPlayer);
router.put('/:id', PlayerController.updatedPlayer);
router.delete('/:id', PlayerController.deletePlayer);

export default router;