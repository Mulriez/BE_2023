"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kelas.hasMany(models.siswa, {
        as: "siswa",
        foreignKey: "idKelas",
      });
    }
  }
  kelas.init(
    {
      idKelas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      namaKelas: DataTypes.STRING,
      kompetensiKeahlian: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "kelas",
    }
  );
  return kelas;
};
