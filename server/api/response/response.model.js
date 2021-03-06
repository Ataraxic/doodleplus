'use strict';

module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define('Response', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status: DataTypes.ENUM('able','unable','maybe','ifneedbe'),
    username: DataTypes.STRING,
    UUID: DataTypes.STRING,
    privateID: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models){
        Response.belongsTo(models.Time);
      }
    }
  });

  return Response;
};
