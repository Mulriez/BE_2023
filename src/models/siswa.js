'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  siswa.init({
    nisn: DataTypes.CHAR,
    nis: DataTypes.CHAR,
    nama: DataTypes.STRING,
    idKelas: DataTypes.INTEGER,
    alamat: DataTypes.TEXT,
    noTelp: DataTypes.STRING,
    idSpp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'siswa',
  });
  return siswa;
};