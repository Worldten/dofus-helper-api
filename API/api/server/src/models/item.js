'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    item_id: DataTypes.INTEGER,
    item_name: DataTypes.STRING,
    item_level: DataTypes.INTEGER,
    item_type: DataTypes.STRING,
    item_image: DataTypes.STRING,
    item_recipe: DataTypes.JSON
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};