import extractBody from "../../utils/request-body.js";
import UserEntity from "./../models/user.mode.js";

/**
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} resp
 */
export default async (req, resp) => {
  const body = await extractBody(req);

  const user = await UserEntity.create({
    firstName: body.firstName,
    lastName: body.lastName,
  });

  resp.writeHead(201, { "Content-Type": "application/json" });
  resp.write(JSON.stringify(user));
  resp.end();
};
