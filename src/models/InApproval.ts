import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"

export interface InApprovalAttributes {
  userId: number
  requisitionId: number
}

export interface InApprovalInstance extends Model<InApprovalAttributes>, InApprovalAttributes { }

export const InApproval = sequelize.define<InApprovalInstance, InApprovalAttributes>('InApproval', {
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  requisitionId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: { model: 'requisitions', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})