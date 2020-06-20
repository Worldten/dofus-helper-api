import database from '../src/models';

class PlayerService {
  static async getAllPlayers() {
    try {
      return await database.player.findAll();
    } catch (error) {
      console.log("Erreur dans le service" + error);
      throw error;
    }
  }

  static async addPlayer(newPlayer) {
    try {
      return await database.player.create(newPlayer);
    } catch (error) {
      throw error;
    }
  }

  static async updatePlayer(id, updatePlayer) {
    try {
      const PlayerToUpdate = await database.player.findOne({
        where: { id: Number(id) }
      });

      if (PlayerToUpdate) {
        await database.player.update(updatePlayer, { where: { id: Number(id) } });

        return updatePlayer;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAPlayer(id) {
    try {
      const thePlayer = await database.player.findOne({
        where: { id: Number(id) }
      });

      return thePlayer;
    } catch (error) {
      throw error;
    }
  }

  static async getAPlayerMail(mail) {
    try {
      const thePlayer = await database.player.findOne({
        where: { player_mail: mail }
      });

      return thePlayer;
    } catch (error) {
      throw error;
    }
  }

  static async deletePlayer(id) {
    try {
      const PlayerToDelete = await database.player.findOne({ where: { id: Number(id) } });

      if (PlayerToDelete) {
        const deletedPlayer = await database.player.destroy({
          where: { id: Number(id) }
        });
        return deletedPlayer;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default PlayerService;