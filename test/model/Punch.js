module.exports = function(sequelize, DataTypes) {
  var Punch = sequelize.define("Punch", {
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

  Punch.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Punch.belongsTo(models.User, {
      onDelete: "cascade"
    };

    Punch.belongsTo(models.Job);
    );
  };

  return Punch;
};