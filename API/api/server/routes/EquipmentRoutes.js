import { Router } from 'express';
import EquipmentController from '../controllers/EquipmentController';

const router = Router();

router.get('/', EquipmentController.getAllEquipments);
router.post('/', EquipmentController.addEquipment);
router.get('/:id', EquipmentController.getAEquipment);
router.put('/:id', EquipmentController.updatedEquipment);
router.delete('/:id', EquipmentController.deleteEquipment);

export default router;