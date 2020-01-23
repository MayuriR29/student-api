const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("Student resource")
})
module.exports = app => {
  app.use("/api/register", router);
};
