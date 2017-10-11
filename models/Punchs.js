module.exports = function(sequelize, DataTypes) {
  var Punchs = sequelize.define("Punchs", {
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    stopDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    },
    stopTime: {
      type: DataTypes.TIME,
      validate: {
        isDate: true
      },
    note: {
      type: DataTypes.TEXT,
    }
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