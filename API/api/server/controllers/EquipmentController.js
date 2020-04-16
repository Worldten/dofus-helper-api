import EquipmentService from '../services/EquipmentService';
import Util from '../utils/Utils';

const util = new Util();

class EquipmentController {
  static async getAllEquipments(req, res) {
    try {
      console.log("On est dans le controller")
      const allEquipments = await EquipmentService.getAllEquipments();
      if (allEquipments.length > 0) {
        util.setSuccess(200, 'Equipments retrieved', allEquipments);
      } else {
        util.setSuccess(200, 'No Equipment found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addEquipment(req, res) {
    console.log("On est dans le controller");
    if (!req.body.equipment_name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newEquipment = req.body;
    console.log(newEquipment);
    try {
      const createdEquipment = await EquipmentService.addEquipment(newEquipment);
      util.setSuccess(201, 'Equipment Added!', createdEquipment);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedEquipment(req, res) {
    const alteredEquipment = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateEquipment = await EquipmentService.updateEquipment(id, alteredEquipment);
      if (!updateEquipment) {
        util.setError(404, `Cannot find Equipment with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Equipment updated', updateEquipment);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAEquipment(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theEquipment = await EquipmentService.getAEquipment(id);

      if (!theEquipment) {
        util.setError(404, `Cannot find Equipment with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Equipment', theEquipment);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteEquipment(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const EquipmentToDelete = await EquipmentService.deleteEquipment(id);

      if (EquipmentToDelete) {
        util.setSuccess(200, 'Equipment deleted');
      } else {
        util.setError(404, `Equipment with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default EquipmentController;
