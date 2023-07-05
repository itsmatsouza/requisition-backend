import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Department {
  id: number;
  name: string;
  number: number;
  userId: number;
}

export interface DepartmentCreationAttributes
  extends Optional<Department, "id" | "userId"> {}

export interface DepartmentInstance
  extends Model<Department, DepartmentCreationAttributes>,
    Department {}

export const Department = sequelize.define<DepartmentInstance, Department>(
  "Department",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    number: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    }
  }
);
