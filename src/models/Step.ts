import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";

export interface Step {
  id: number;
  name: string;
  description: string
  workflowId: number
  approval: string
  attachmentUrl: string
}

export interface StepCreationAttributes extends Optional<Step, "id"> {}

export interface StepInstance
  extends Model<Step, StepCreationAttributes>,
    Step {}

export const Step = sequelize.define<StepInstance, Step>("Step", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  workflowId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'workflows', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  approval: {
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