import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import { requisitionService } from "../services/requisitionService";

export interface Requisition {
  id: number;
  name: string;
  userId: number;
  departmentId: number;
  requisitionStatusId: number;
  projectId: number;
  description: string;
  attachmentUrl: string;
}

export interface RequisitionCreationAttributes
  extends Optional<Requisition, "id" | "projectId" | "attachmentUrl"> {}

export interface RequisitionInstance
  extends Model<Requisition, RequisitionCreationAttributes>,
    Requisition {}

export const Requisition = sequelize.define<RequisitionInstance, Requisition>(
  "Requisition",
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
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    departmentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "departments", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    requisitionStatusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "requisition_statuses", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",

    },
    projectId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references: { model: "projects", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    attachmentUrl: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      afterSave: async (requisition) => {
        await requisitionService.setInvolved(
          Number(requisition.userId),
          Number(requisition.id)
        );
        await requisitionService.sendTo(
          Number(requisition.departmentId),
          Number(requisition.id)
        )
      },
    },
  }
);
