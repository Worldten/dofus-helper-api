import { Router } from 'express';
import ItemController from '../controllers/ItemController';
var authController = require("../controllers/AuthController")


const router = Router();

router.get('/', ItemController.getAllItems);
router.post('/', ItemController.addItem);
router.post('/filter', ItemController.getItemFilter)
router.get('/stuff', ItemController.getAllNonWeapons);
router.get('/weapons', ItemController.getAllWeapons);
router.get('/:id', ItemController.getAItem);
router.put('/:id', ItemController.updatedItem);
router.delete('/:id', ItemController.deleteItem);
router.get('/limit/:limit', ItemController.getItemLimit);


export default router;