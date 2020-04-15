import PlayerService from '../services/PlayerService';
import Util from '../utils/Utils';

const util = new Util();

class PlayerController {
  static async getAllPlayers(req, res) {
    try {
      console.log("On est dans le controller")
      const allPlayers = await PlayerService.getAllPlayers();
      if (allPlayers.length > 0) {
        util.setSuccess(200, 'Players retrieved', allPlayers);
      } else {
        util.setSuccess(200, 'No Player found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addPlayer(req, res) {
    console.log("On est dans le controller");
    if (!req.body.player_mail) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newPlayer = req.body;
    console.log(newPlayer);
    try {
      const createdPlayer = await PlayerService.addPlayer(newPlayer);
      util.setSuccess(201, 'Player Added!', createdPlayer);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedPlayer(req, res) {
    const alteredPlayer = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatePlayer = await PlayerService.updatePlayer(id, alteredPlayer);
      if (!updatePlayer) {
        util.setError(404, `Cannot find Player with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Player updated', updatePlayer);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAPlayer(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thePlayer = await PlayerService.getAPlayer(id);

      if (!thePlayer) {
        util.setError(404, `Cannot find Player with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Player', thePlayer);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletePlayer(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const PlayerToDelete = await PlayerService.deletePlayer(id);

      if (PlayerToDelete) {
        util.setSuccess(200, 'Player deleted');
      } else {
        util.setError(404, `Player with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default PlayerController;
