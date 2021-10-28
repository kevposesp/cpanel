'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING,
          unique: true
      },
      userName: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
      },
      firstName: {
          type: Sequelize.STRING
      },
      lastName: {
          type: Sequelize.STRING
      },
      email: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: true
      },
      password: {
          allowNull: false,
          type: Sequelize.STRING
      },
      idStripe: {
        allowNull: false,
        type: Sequelize.STRING
      },
      typeUser: {
        allowNull: false,
        type: Sequelize.STRING
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
