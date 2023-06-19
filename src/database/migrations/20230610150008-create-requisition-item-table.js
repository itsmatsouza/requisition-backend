"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("requisition_items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      requisition_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "requisitions", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      tax_item_number_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "tax_item_numbers", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      quantity: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      unit_of_measurement_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "unit_of_measurements", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      unit_price: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      observation: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("requisition_items");
  },
};
