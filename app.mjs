import express from "express";
import router from "./src/server/routes/indexRouter.mjs";
import sequelize from "./config/database.mjs";

const app = express();
await sequelize.sync();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("dist"));

app.use("/", router);

app.listen(8000, () => console.log("Server running on port 8000"));
