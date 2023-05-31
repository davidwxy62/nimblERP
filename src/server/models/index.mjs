import User from "./userModel.mjs";
import RoutingTable from "./routingTableModel.mjs";
import Drawing from "./drawingModel.mjs";
import Part from "./partModel.mjs";
import Customer from "./customerModel.mjs";
import Order from "./orderModel.mjs";
import Vendor from "./vendorModel.mjs";
import VendingOrder from "./vendingOrderModel.mjs";

const models = {
  User,
  RoutingTable,
  Drawing,
  Part,
  Customer,
  Order,
  Vendor,
  VendingOrder,
};

Object.keys(models).forEach((modelName) => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

export default models;
