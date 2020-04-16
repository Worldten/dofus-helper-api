'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.createTable('players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      player_mail: {
        type: Sequelize.STRING
      },
      player_pwd: {
        type: Sequelize.STRING
      },
      player_username: {
        type: Sequelize.STRING
      },
      player_confirmedmail: {
        type: Sequelize.BOOLEAN
      },
      player_jobs: {
        type: Sequelize.JSON
      },
      player_characters: {
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
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Players');
  }
};
//# sourceMappingURL=20200328160026-create-player.js.map