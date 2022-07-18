'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aplikasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      aplikasi.hasMany(models.role, {foreignKey: 'id_aplikasi', as: 'roles'});
    }
  };
  aplikasi.init({
    id_aplikasi: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    nama_aplikasi: {
      type: DataTypes.STRING(250)
    }
  }, {
    sequelize,
    modelName: 'aplikasi',
    tableName: 'aplikasi',
    timestamps: false
  });
  return aplikasi;
};