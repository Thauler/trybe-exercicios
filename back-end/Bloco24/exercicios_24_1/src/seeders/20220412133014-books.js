'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books',
    [
      {
        title: 'Harry Potter e as Relíquias da Morte',
        author: 'J.K. Rowling',
        pageQuantity: '552',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
