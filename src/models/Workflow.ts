import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import { User } from "./User";

export interface Workflow {
  id: number;
  name: string;
  description: string
  owner: string
  finished: boolean
  status: string
  attachmentUrl: string
}

export interface WorkflowCreationAttributes extends Optional<Workflow, "id"> {}

export interface WorkflowInstance
  extends Model<Workflow, WorkflowCreationAttributes>,
    Workflow {}

export const Workflow = sequelize.define<WorkflowInstance, Workflow>("Workflow", {
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
    type: DataTypes.STRING
  },
  owner: {
    allowNull: false,
    type: DataTypes.STRING
  },
  finished: {
    defaultValue: false,
    type: DataTypes.BOOLEAN,
  },
  status: {
    type: DataTypes.STRING,
    validate: {
      isIn: [["approved", "notApproved", "waiting"]],
    },
    defaultValue: 'waiting',
  },
  attachmentUrl: {
    allowNull: true,
    type: DataTypes.STRING
  },
});