import { URL } from "url";
import routes from "../routes/index.js";
import notFoundException from "../errors/not-found.js";

/**
 * Handler routes
 * @param {*} req
 * @param {*} resp
 * @returns
 */
const handler = async (req, resp) => {
  const baseURL = req.protocol + "://" + req.headers.host + "/";
  const reqUrl = new URL(req.url, baseURL);
  const { pathname } = reqUrl;
  const execute = routes[pathname] && routes[pathname][req.method];
  if (!execute) {
    return notFoundException(req, resp);
  }
  return await execute(req, resp);
};

export default handler;
