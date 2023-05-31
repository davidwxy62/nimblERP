import express from "express";
import orderRouter from "./orderRouter.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    name: "Liane B.",
  });
});

router.use("/order", orderRouter);

export default router;
