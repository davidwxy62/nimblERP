import express from "express";
// import orderController from '../controllers/orderController.mjs';

const orderRouter = express.Router();

orderRouter.get("/new", (req, res) => {
  res.render("newOrder", {
    name: "Liane B.",
  });
});

// orderRouter.post('/new', orderController.createOrder);

export default orderRouter;
