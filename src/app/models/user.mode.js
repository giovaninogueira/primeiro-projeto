import { DataTypes } from "sequelize"
import { sequelize } from "../../config/database.js";

const UserEntity = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

export default UserEntity;
