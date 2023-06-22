import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";
import { requisitionService } from "../services/requisitionService";

export interface SendTo {
  id: number;
  requisitionId: number;
  userId: number;
}

export interface SendToCreationAttributes
  extends Optional<SendTo, "id"> {}

export interface SendToInstance
  extends Model<SendTo, SendToCreationAttributes>,
    SendTo {}

export const SendTo = sequelize.define<SendToInstance, SendTo>(
  "SendTo",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    requisitionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "requisitions", key: "id"},
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },
  },
  {
    hooks: {
      afterSave: async (sendTo) => {
        requisitionService.setInApproval(Number(sendTo.userId), Number(sendTo.requisitionId))
      }
    }
  }
);
