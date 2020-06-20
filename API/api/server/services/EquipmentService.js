import database from '../src/models';

class EquipmentService {
  static async getAllEquipments() {
    try {
      return await database.equipments.findAll();
    } catch (error) {
      console.log("Erreur dans le service" + error);
      throw error;
    }
  }

  static async addEquipment(newEquipment) {
    try {
      return await database.equipments.create(newEquipment);
    } catch (error) {
      throw error;
    }
  }

  static async updateEquipment(id, updateEquipment) {
    try {
      const EquipmentToUpdate = await database.equipments.findOne({
        where: { id: Number(id) }
      });

      if (EquipmentToUpdate) {
        await database.equipments.update(updateEquipment, { where: { id: Number(id) } });

        return updateEquipment;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getEquipmentbyPlayer(playerId) {
    try {
      const Equipments = await database.equipments.findAll({
        where: { player_id: Number(playerId) }
      });

      return Equipments;
    } catch (error) {
      throw error;
    }
  }

  static async getAEquipment(id) {
    try {
      const theEquipment = await database.equipments.findOne({
        where: { id: Number(id) }
      });

      return theEquipment;
    } catch (error) {
      throw error;
    }
  }

  static async deleteEquipment(id) {
    try {
      const EquipmentToDelete = await database.equipments.findOne({ where: { id: Number(id) } });

      if (EquipmentToDelete) {
        const deletedEquipment = await database.equipments.destroy({
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