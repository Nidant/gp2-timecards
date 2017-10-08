module.exports = function(sequelize, DataTypes) {
  var Punchs = sequelize.define("Punchs", {
    start: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    stop: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    note: {
      type: DataTypes.TEXT,
    }
  });

  Punchs.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Punchs.belongsTo(models.Users, {
      onDelete: "cascade"
    });

    Punchs.belongsTo(models.Jobs,{});
  };

  return Punchs;
};