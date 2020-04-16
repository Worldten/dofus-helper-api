'use strict';

module.exports = function (sequelize, DataTypes) {
  var Equipment = sequelize.define('equipments', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    equipment_name: DataTypes.STRING,
    equipment_items: DataTypes.JSON,
    equipment_recipe: DataTypes.JSON,
    player_id: DataTypes.INTEGER
  }, {});

  Equipment.associate = function (models) {// associations can be defined here
  };

  return Equipment;
};
//# sourceMappingURL=equipment.js.map