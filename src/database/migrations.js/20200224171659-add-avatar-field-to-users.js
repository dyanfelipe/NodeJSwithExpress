'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // name of table that go to be add the new field
      'avatar_id',
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      }
    )
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'avatar_id')
  }
};
