'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('workflows', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      owner: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      involved: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      finished: {
        defaultValue: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      status: {
        defaultValue: "waiting",
        type: Sequelize.DataTypes.STRING
      },
      attachment_url: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('workflows')
  }
};
