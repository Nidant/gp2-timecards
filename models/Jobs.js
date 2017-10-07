module.exports = function(sequelize, DataTypes) {
  var Jobs = sequelize.define("Jobs", {
    job: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Jobs.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Jobs.hasMany(models.Punchs, {
      onDelete: "cascade"
    });
  };

  return Jobs;
};