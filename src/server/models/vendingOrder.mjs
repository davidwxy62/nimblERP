import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.mjs";

class VendingOrder extends Model {}

VendingOrder.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_number: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    PO_number: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    modification_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    modified_by: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'VendingOrder'
});

VendingOrder.associate = (models) => {
    VendingOrder.belongsTo(models.Vendor, {
        foreignKey: 'vendor_id',
        onDelete: 'RESTRICT'
    });
    VendingOrder.hasMany(models.Part, {
        foreignKey: 'vending_order_id',
        onDelete: 'SET NULL'
    });
}

export default VendingOrder;
