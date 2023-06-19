import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface RequisitionStatus {
  id: number;
  name: string;
}

export interface RequisitionStatusCreationAttributes
  extends Optional<RequisitionStatus, "id"> {}

export interface RequisitionStatusInstance
  extends Model<RequisitionStatus, RequisitionStatusCreationAttributes>,
    RequisitionStatus {}

export const RequisitionStatus = sequelize.define<
  RequisitionStatusInstance,
  RequisitionStatus
>("RequisitionStatus", {
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
});
