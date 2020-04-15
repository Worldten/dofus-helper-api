import database from '../src/models';

class EquipmentService {
  static async get() {
    try {
      return await database.equipment.findAll();
    } catch (error) {
      console.log("Erreur dans le service" + error);
      throw error;
    }
  }

  static async addEquipment(newEquipment) {
    try {
      return await database.equipment.create(newEquipment);
    } catch (error) {
      throw error;
    }
  }

  static async updateEquipment(id, updateEquipment) {
    try {
      const EquipmentToUpdate = await database.equipment.findOne({
        where: { id: Number(id) }
      });

      if (EquipmentToUpdate) {
        await database.equipment.update(updateEquipment, { where: { id: Number(id) } });

        return updateEquipment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAEquipment(id) {
    try {
      const theEquipment = await database.equipment.findOne({
        where: { id: Number(id) }
      });

      return theEquipment;
    } catch (error) {
      throw error;
    }
  }

  static async deleteEquipment(id) {
    try {
      const EquipmentToDelete = await database.equipment.findOne({ where: { id: Number(id) } });

      if (EquipmentToDelete) {
        const deletedEquipment = await database.equipment.destroy({
          where: { id: Number(id) }
        });
        return deletedEquipment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default EquipmentService;