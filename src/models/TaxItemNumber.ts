import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface TaxItemNumber {
  id: number;
  name: string;
  description: string;
}

export interface TaxItemNumberCreationAttributes
  extends Optional<TaxItemNumber, "id"> {}

export interface TaxItemNumberInstance
  extends Model<TaxItemNumber, TaxItemNumberCreationAttributes>,
    TaxItemNumber {}

export const TaxItemNumber = sequelize.define<
  TaxItemNumberInstance,
  TaxItemNumber
>("TaxItemNumber", {
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
