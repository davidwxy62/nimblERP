import User from "./user.mjs";
import RoutingTable from "./routingTable.mjs";
import Drawing from "./drawings.mjs";
import Part from "./part.mjs";
import Customer from "./customer.mjs";
import Order from "./order.mjs";
import Vendor from "./vendor.mjs";
import VendingOrder from "./vendingOrder.mjs";

const models = {
    User,
    RoutingTable,
    Drawing,
    Part,
    Customer,
    Order,
    Vendor,
    VendingOrder
};

Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

export default models;
