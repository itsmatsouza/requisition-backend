'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('requisition_items', 'sequence', {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          after: "number"
        }, { transaction: t }),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('requisition_items', 'sequence', { transaction: t }),
      ]);
    });
  }
};
