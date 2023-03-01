"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      petugas.hasMany(models.pembayaran, {
        as: "pembayaran",
        foreignKey: "idPetugas",
      });
    }
  }
  petugas.init(
    {
      idPetugas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      namaPetugas: DataTypes.STRING,
      level: DataTypes.ENUM("admin", "petugas"),
    },
    {
      sequelize,
      modelName: "petugas",
    }
  );
  return petugas;
};
