'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  role.init({
    id_role: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_aplikasi: {
      type: DataTypes.INTEGER
    },
    nama_role: {
      type: DataTypes.STRING(255)
    }
  }, {
    sequelize,
    modelName: 'role',
    tableName: 'role',
    timestamps: false
  });
  return role;
};