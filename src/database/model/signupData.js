const { DataTypes } = require("sequelize");
const eventDb = require("../config/dbConfig");

const signupData = eventDb.define("signup_users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
    validate: {
      is: /^[A-Za-z]*$/
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
    validate: {
      is: /^[A-Za-z]*$/
    }
  },
  gender: {
    type: DataTypes.ENUM,
    values: ["Male", "Female"],
    allowNull: false
  },
  profession: {
    type: DataTypes.ENUM,
    values: ["IT", "Management", "Student", "Content-Writer"],
    allowNull: false
  },
  experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 40
    }
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[A-Za-z]*$/
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: "contact_no",
    validate: {
      is: /^\d{10}$/
    }
  }
});

module.exports = signupData;
