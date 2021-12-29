// Option 2: Passing parameters separately (sqlite)
import { Sequelize } from "sequelize";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Connect DB
 */
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: `${__dirname}/../database/database.sqlite`,
  logging: false,
  pool: {
    max: 5,
    min: 0,
  },
});

export { sequelize };
