import ItemService from '../services/ItemService';
import Util from '../utils/Utils';

const util = new Util();

class ItemController {
  static async getAllItems(req, res) {
    try {
      const allItems = await ItemService.getAllItems();
      if (allItems.length > 0) {
        util.setSuccess(200, 'Items retrieved', allItems);
      } else {
        util.setSuccess(200, 'No Item found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addItem(req, res) {
    if (!req.body.item_name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newItem = req.body;
    console.log(newItem);
    try {
      const createdItem = await ItemService.addItem(newItem);
      util.setSuccess(201, 'Item Added!', createdItem);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedItem(req, res) {
    const alteredItem = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateItem = await ItemService.updateItem(id, alteredItem);
      if (!updateItem) {
        util.setError(404, `Cannot find Item with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Item updated', updateItem);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAItem(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theItem = await ItemService.getAItem(id);

      if (!theItem) {
        util.setError(404, `Cannot find Item with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Item', theItem);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteItem(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const ItemToDelete = await ItemService.deleteItem(id);

      if (ItemToDelete) {
        util.setSuccess(200, 'Item deleted');
      } else {
        util.setError(404, `Item with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllNonWeapons(req, res) {
    try {
      const allItems = await ItemService.getAllNonWeapons();
      if (allItems.length > 0) {
        util.setSuccess(200, 'Items retrieved', allItems);
      } else {
        util.setSuccess(200, 'No Item found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getAllWeapons(req, res) {
    try {
      const allItems = await ItemService.getAllWeapons();
      if (allItems.length > 0) {
        util.setSuccess(200, 'Items retrieved', allItems);
      } else {
        util.setSuccess(200, 'No Item found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }


  static async getItemFilter(req, res) {
    const itemFilter = req.body;
    try {
      const allItems = await ItemService.getItemFilter(itemFilter);
      if (allItems.length > 0) {
        util.setSuccess(200, 'Items retrieved', allItems);
      } else {
        util.setSuccess(200, 'No Item found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async getItemLimit(req, res){
    const { limit } = req.params;

    try {
      const allItems = await ItemService.getItemLimit(limit);
      if (allItems.length > 0) {
        util.setSuccess(200, 'Items retrieved', allItems);
      } else {
        util.setSuccess(200, 'No Item found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ItemController;
