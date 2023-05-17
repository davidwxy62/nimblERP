import { Model, DataTypes, HasMany } from 'sequelize';
import sequelize from "../config/database.mjs";

class Customer extends Model {}

Customer.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    code: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    sales_rep: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Customer',
    timestamps: false
});

Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
        foreignKey: 'customer_id',
        onDelete: 'RESTRICT'
    });
};

export default Customer;
