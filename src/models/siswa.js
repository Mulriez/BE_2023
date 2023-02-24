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
      siswa.hasMany(models.pembayaran, {
        as: "nisn",
        foreignKey: "nisn",
      });
      siswa.hasMany(models.pembayaran, {
        as: "idSpp",
        foreignKey: "idSpp",
      });
      siswa.belongsTo(models.spp,{
        as: "idSpp",
        foreignKey: "idSpp",
      });
      siswa.belongsTo(models.kelas,{
        as: "idKelas",
        foreignKey: "idKelas",
      });
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