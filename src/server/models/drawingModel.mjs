import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/database.mjs";

class Drawing extends Model {}

Drawing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    routing_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    drawing_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    price_table: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    modification_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    modified_by: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Drawing",
  }
);

Drawing.associate = (models) => {
  Drawing.belongsTo(models.RoutingTable, {
    foreignKey: "routing_table_id",
    onDelete: "RESTRICT",
  });
  Drawing.hasMany(models.Part, {
    foreignKey: "drawing_id",
    onDelete: "RESTRICT",
  });
};

export default Drawing;
