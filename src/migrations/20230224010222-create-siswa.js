"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("siswas", {
      nisn: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.CHAR,
      },
      nis: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idKelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "kelas",
          key: "idKelas",
          as: "idKelas",
        },
      },
      alamat: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      noTelp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idSpp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "spps",
          key: "idSpp",
          as: "idSpp",
        },
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
    await queryInterface.dropTable("siswas");
  },
};
