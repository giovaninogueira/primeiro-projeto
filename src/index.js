// const http = require("http");
import http from "http";
import handlerRoute from "./utils/route-handler.js";
import { configs } from "./config/index.js";

const server = http.createServer();

// running configs
configs();

/**
 * Passando a função como callback
 */
server.on("request", handlerRoute);

/**
 * Listen
 */
server.listen(3000, "127.0.0.1", () => {
  console.log("server is running...");
});
