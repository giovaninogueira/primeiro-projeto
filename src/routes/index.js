import userCreateController from "../app/controllers/user-create.controller.js"

const routes = {
  "/user": {
    POST: userCreateController,
  },
};

export default routes;
