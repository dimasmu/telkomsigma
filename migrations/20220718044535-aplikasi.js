'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aplikasi', {
      id_aplikasi: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'pegawai',
          },
          key: 'user_id',
        },
        onDelete: 'CASCADE'
      },
      nama_aplikasi: {
        type: Sequelize.STRING(255),
        unique: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('aplikasi');
  }
};