import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";

export interface RequisitionItem {
  id: number;
  sequence: number;
  requisitionId: number;
  taxItemNumberId: number;
  quantity: number;
  unitOfMeasurementId: number;
  unitPrice: number;
  name: string;
  observation: string;
}

export interface RequisitionItemCreationAttributes
  extends Optional<RequisitionItem, "id"> {}

export interface RequisitionItemInstance
  extends Model<RequisitionItem, RequisitionItemCreationAttributes>,
    RequisitionItem {}

export const RequisitionItem = sequelize.define<
  RequisitionItemInstance,
  RequisitionItem
>("RequisitionItem", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  sequence: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  requisitionId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "requisitions", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
  taxItemNumberId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "tax_item_numbers", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
  quantity: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  unitOfMeasurementId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: "unit_of_measurements", key: "id" },
    onUpdate: "CASCADE",
    onDelete: "RESTRICT",
  },
  unitPrice: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  observation: {
    allowNull: true,
    type: DataTypes.STRING,
  },
});
