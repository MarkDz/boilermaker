const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://p7.hiclipart.com/preview/888/246/335/lollipop-gummi-candy-cotton-candy-chocolate-bar-liquorice-candy.jpg',
  },
});