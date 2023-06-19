import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface UnitOfMeasurement {
  id: number;
  name: string;
  description: string;
}

export interface UnitOfMeasurementCreationAttributes
  extends Optional<UnitOfMeasurement, "id"> {}

export interface UnitOfMeasurementInstance
  extends Model<UnitOfMeasurement, UnitOfMeasurementCreationAttributes>,
    UnitOfMeasurement {}

export const UnitOfMeasurement = sequelize.define<
  UnitOfMeasurementInstance,
  UnitOfMeasurement
>("UnitOfMeasurement", {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
});
