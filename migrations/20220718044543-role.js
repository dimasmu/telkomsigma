'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role', {
      id_role: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_aplikasi: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'aplikasi',
          },
          key: 'id_aplikasi',
        },
        onDelete: 'CASCADE'
      },
      nama_role: {
        type: Sequelize.STRING(255),
        allowNull: true,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role');
  }
};