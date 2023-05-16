import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database.mjs";

class Part extends Model {}

Part.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    vending_order_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    drawing_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    routing_table_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    serial_number: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    open: {
        type: DataTypes.BOOLEAN,
        allowNull: false
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
    modelName: 'Part'
});

Part.associate = (models) => {
    Part.belongsTo(models.Order, {
        foreignKey: 'order_id',
        onDelete: 'SET NULL'
    });
    Part.belongsTo(models.VendingOrder, {
        foreignKey: 'vending_order_id',
        onDelete: 'SET NULL'
    });
    Part.belongsTo(models.Drawing, {
        foreignKey: 'drawing_id',
        onDelete: 'RESTRICT'
    });
    Part.belongsTo(models.RoutingTable, {
        foreignKey: 'routing_table_id',
        onDelete: 'RESTRICT'
    });
};

export default Part;
