import { sequelize } from "./database.js";

/**
 * Running Configs
 */
const configs = () => {
  sequelize.sync().then(() => {
      console.log('models created...');
  });
};

export { configs };
