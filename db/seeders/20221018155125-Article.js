/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [{
      category: 'комната',
      price: 3000,
      description: 'Сдается комната в общежитии коридорного типа',
      photo: 'https://12.img.avito.st/image/1/1.OaqymraylUOEM1dGzO5OpnY5lUUSO5c.ksUBlmlNhtW6H8bNwObuwUbZwD3wbCDWGg8ILQYqfcU',
      address: 'Калининградская область, Калининград, Звёздная ул., 29р-н Ленинградский',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      category: 'квартира',
      price: 20000,
      description: 'Сдается квартира, в хорошем состоянии',
      photo: 'https://39.img.avito.st/image/1/1.juImy7a-IgtIa8ILNt2lxuFoJA2GaiABmLAj65JoIAuSyCE.blnmq7kwz8ymPCl1LUfc6fUyozJ8dAcS4H8i9hebfMc',
      address: 'Краснодарский край, Сочи, ул. Ленина, 290/6 р-н Адлерский',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  },
};
