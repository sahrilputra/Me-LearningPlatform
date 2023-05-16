module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    "Media",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createAt: {
        field: "create_at",
        type: DataTypes.DATE,
        allowNull: false
      },
      updateAt: {
        field: "update_at",
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: "media"
    }
  );
  return Media;
};
