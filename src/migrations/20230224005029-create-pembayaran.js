"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pembayarans", {
      idPembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPetugas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "petugas",
          key: "idPetugas",
          as: "idPetugas",
        },
      },
      nisn: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "siswas",
          key: "nisn",
          as: "nisn",
        },
      },
      tglBayar: {
        type: Sequelize.DATE,
      },
      bulanDibayar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tahunDibayar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idSpp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "siswas",
          key: "idSpp",
          as: "idSpp",
        },
      },
      jumlahBayar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pembayarans");
  },
};
