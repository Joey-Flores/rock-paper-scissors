const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      ["/login", , "/logout", "/register", "/score", "/account"],
      { target: "https://evening-shore-30877.herokuapp.com/" }
    )
  );
};
