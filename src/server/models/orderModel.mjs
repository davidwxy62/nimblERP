import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/database.mjs";

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    PO_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
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
    modelName: "Order",
  }
);

Order.associate = (models) => {
  Order.belongsTo(models.Customer, {
    foreignKey: "customer_id",
    onDelete: "RESTRICT",
  });
  Order.hasMany(models.Part, {
    foreignKey: "order_id",
    onDelete: "SET NULL",
  });
};

export default Order;
