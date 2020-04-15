'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      item_id: {
        type: Sequelize.INTEGER
      },
      item_name: {
        type: Sequelize.STRING
      },
      item_level: {
        type: Sequelize.INTEGER
      },
      item_type: {
        type: Sequelize.STRING
      },
      item_image: {
        type: Sequelize.STRING
      },
      item_recipe: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  }
};