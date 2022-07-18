'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pegawai extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pegawai.hasMany(models.aplikasi, {foreignKey: 'user_id', as: 'aplikasi'});
    }
  };
  pegawai.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(250)
    },
    full_name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'pegawai',
    tableName: 'pegawai',
    timestamps: false
  });
  return pegawai;
};