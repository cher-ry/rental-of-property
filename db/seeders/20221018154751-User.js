/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      login: 'cherry',
      email: 'cherry@mail.ru',
      password: '12345678',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),

    },
    {
      login: 'test',
      email: 'test@mail.ru',
      password: '12345678',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date(),

    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
