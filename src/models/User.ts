import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcrypt";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "user";
  responsability: string;
  departmentId: number;
}

export interface UserCreationAttributes extends Optional<User, "id"> {}

export interface UserInstance
  extends Model<User, UserCreationAttributes>,
    User {}

export const User = sequelize.define<UserInstance, User>(
  "User",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        // Validacao do sequelize para ver se e um email valido
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [["admin", "user"]],
      },
    },
    responsability: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    departmentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "departments", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed("password")) {
          user.password = await bcrypt.hash(user.password.toString(), 10);
        }
      },
    },
  }
);
