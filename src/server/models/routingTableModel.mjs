import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/database.mjs";

class RoutingTable extends Model {}

RoutingTable.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "RoutingTable",
  }
);

RoutingTable.associate = (models) => {
  RoutingTable.hasMany(models.Part, {
    foreignKey: "routing_table_id",
    onDelete: "RESTRICT",
  });
  RoutingTable.hasOne(models.Drawing, {
    foreignKey: "routing_table_id",
    onDelete: "RESTRICT",
  });
};

export default RoutingTable;
