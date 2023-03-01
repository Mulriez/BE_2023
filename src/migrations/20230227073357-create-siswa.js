'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswas', {
      nisn: {
        type: Sequelize.CHAR,
        primaryKey: true,
        allowNull: false,
      },
      nis: {
        allowNull: false,
        type: Sequelize.CHAR
      },
      nama: {
        allowNull: false,
        type: Sequelize.STRING
      },
      idKelas: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "kelas",
          key: "idKelas",
          as: "idKelas",
        },
      },
      alamat: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      noTelp: {
        allowNull: false,
        type: Sequelize.STRING
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('siswas');
  }
};