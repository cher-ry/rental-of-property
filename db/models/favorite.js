const {
  Model,
} = require('sequelize');
const user = require('./user');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
      // define association here
    }
  }
  Favorite.init({
    
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    articleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Articles',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
