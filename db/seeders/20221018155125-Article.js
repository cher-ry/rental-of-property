/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      category: 'комната',
      price: 3000,
      description: 'Сдается комната в общежитии коридорного типа, по адресу: ул. Звездная,Самый центр города ориентир ТРЦ Европа, ТЦ Маяк, площадь Победы, Северный вокзал.',
      photo: 'https://12.img.avito.st/image/1/1.OaqymraylUOEM1dGzO5OpnY5lUUSO5c.ksUBlmlNhtW6H8bNwObuwUbZwD3wbCDWGg8ILQYqfcU',
      address: 'Калининградская область, Калининград, Звёздная ул., 29р-н Ленинградский',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
