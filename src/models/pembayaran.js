"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pembayaran.belongsTo(models.petugas, {
        as: "idPeugas",
        foreignKey: "idPetugas",
      });
      pembayaran.belongsTo(models.siswa, {
        as: "nisn",
        foreignKey: "nisn",
      });
      pembayaran.belongsTo(models.siswa, {
        as: "idSpp",
        foreignKey: "idSpp",
      });
    }
  }
  pembayaran.init(
    {
      idPembayaran: DataTypes.INTEGER,
      idPetugas: DataTypes.INTEGER,
      nisn: DataTypes.STRING,
      tglBayar: DataTypes.DATE,
      bulanDibayar: DataTypes.STRING,
      tahunDibayar: DataTypes.STRING,
      idSpp: DataTypes.INTEGER,
      jumlahBayar: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pembayaran",
    }
  );
  return pembayaran;
};
