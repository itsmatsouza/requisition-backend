"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("requisitions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      department_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "departments", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      requisition_status_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "requisition_statuses", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      project_id: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: "projects", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT",
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
      },
      attachment_url: {
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
    await queryInterface.dropTable("requisitions");
  },
};
