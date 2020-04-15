'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('player', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    player_mail: DataTypes.STRING,
    player_pwd: DataTypes.STRING,
    player_username: DataTypes.STRING,
    player_confirmedmail: DataTypes.BOOLEAN,
    player_jobs: DataTypes.JSON,
    player_characters: DataTypes.JSON
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
  };
  return Player;
};