'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPembayaran: {
        type: Sequelize.INTEGER
      },
      idPetugas: {
        type: Sequelize.INTEGER
      },
      nisn: {
        type: Sequelize.STRING
      },
      tglBayar: {
        type: Sequelize.DATE
      },
      bulanDibayar: {
        type: Sequelize.STRING
      },
      tahunDibayar: {
        type: Sequelize.STRING
      },
      idSpp: {
        type: Sequelize.INTEGER
      },
      jumlahBayar: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('pembayarans');
  }
};