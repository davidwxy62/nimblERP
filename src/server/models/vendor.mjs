import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.mjs";

class Vendor extends Model {}

Vendor.init({
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
    }
}, {
    sequelize,
    modelName: 'Vendor',
    timestamps: false
});

Vendor.associate = (models) => {
    Vendor.hasMany(models.VendingOrder, {
        foreignKey: 'vendor_id',
        onDelete: 'RESTRICT'
    });
};

export default Vendor;
