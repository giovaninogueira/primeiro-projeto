import { DataTypes } from "sequelize"
import { sequelize } from "../../config/database.js";

const UserEntity = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});

export default UserEntity;
