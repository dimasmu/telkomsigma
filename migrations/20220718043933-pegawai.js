'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pegawai', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING(255),
        unique: true
      },
      full_name: {
        type: Sequelize.STRING(255)
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pegawai');
  }
};