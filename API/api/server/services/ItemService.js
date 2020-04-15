import database from '../src/models';

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
}

export default ItemService;