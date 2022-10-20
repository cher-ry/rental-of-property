/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Favorites', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
      },
      articleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      references: {
        model: 'Articles',
        key: 'id',
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
    await queryInterface.dropTable('Favorites');
  },
};
