const restaurantRouter = require("./restaurant-route");
const reservationRouter = require("./reservation-route");
const userRouter = require("./user-route");

const routes = (app) => {
  app.use("/api/v1/restaurant", restaurantRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/reservation", reservationRouter);
  app.use("/", (req, res) => {
    res.status(404).json({
      message: "Hello, world!",
    });
  });
};

module.exports = routes;
