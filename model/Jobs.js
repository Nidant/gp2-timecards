module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    job: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      }
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Job.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts

    Job.hasMany(models.punch)
  };

  return Job;
};