import { Router } from 'express';
import EquipmentController from '../controllers/EquipmentController';
var authController = require("../controllers/AuthController")


const router = Router();

router.get('/', authController.verifyToken, EquipmentController.getAllEquipments);
router.post('/', authController.verifyToken, EquipmentController.addEquipment);
router.get('/:id', authController.verifyToken, EquipmentController.getAEquipment);
router.put('/:id', authController.verifyToken, EquipmentController.updatedEquipment);
router.delete('/:id', authController.verifyToken, EquipmentController.deleteEquipment);
router.get('/player/:id', authController.verifyToken, EquipmentController.getEquipmentsByPlayer);


export default router;