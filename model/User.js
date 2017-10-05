module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    },
    lName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }
    }
  });

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.belongsTo(models.Logins, {
      foreignKey: {
        allowNull: false
      }
    });
    User.hasMany(models.Punch);
  };

  return User;
};