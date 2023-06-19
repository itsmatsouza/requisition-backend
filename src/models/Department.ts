import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Department {
  id: number;
  name: string;
  number: number;
}

export interface DepartmentCreationAttributes
  extends Optional<Department, "id"> {}

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
  }
);
