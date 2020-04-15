import database from '../src/models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

class ItemService {
  static async getAllItems() {
    try {
      return await database.item.findAll();
    } catch (error) {
      console.log("Erreur dans le service" + error);
      throw error;
    }
  }

  static async addItem(newItem) {
    try {
      return await database.item.create(newItem);
    } catch (error) {
      throw error;
    }
  }

  static async updateItem(id, updateItem) {
    try {
      const ItemToUpdate = await database.item.findOne({
        where: { id: Number(id) }
      });

      if (ItemToUpdate) {
        await database.item.update(updateItem, { where: { id: Number(id) } });

        return updateItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAItem(id) {
    try {
      const theItem = await database.item.findOne({
        where: { id: Number(id) }
      });

      return theItem;
    } catch (error) {
      throw error;
    }
  }

  static async deleteItem(id) {
    try {
      const ItemToDelete = await database.item.findOne({ where: { id: Number(id) } });

      if (ItemToDelete) {
        const deletedItem = await database.item.destroy({
          where: { id: Number(id) }
        });
        return deletedItem;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAllNonWeapons(){
    try {
      return await database.item.findAll({ where: {
        item_type :{
          [Op.or]: ["Bottes", "Ceinture", "Cape", "Chapeau", "Anneau", "Amulette", "Bouclier"]
        }
      }});
    } catch (error) {
      console.log("Erreur dans le service" + error);
      throw error;
    }
    
  }
  static async getAllWeapons(){
    try {
      return await database.item.findAll({ where: {
        item_type :{
          [Op.or]: ["Épée", "Dague", "Baguette", "Marteau", "Arc", "Pelle", "Hache", "Pioche", "Bâton", "Faux"]
        }
      }});
    } catch (error) {
      console.log("Erreur dans le service" + error);
      throw error;
    }
    
  }
}

export default ItemService;