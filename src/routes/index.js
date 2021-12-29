import userCreateController from "../app/controllers/user-create.controller.js"

const routes = {
  "/": {
    POST: userCreateController,
  },
};

export default routes;
