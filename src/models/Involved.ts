import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export interface InvolvedAttributes {
  userId: number;
  requisitionId: number;
}

export interface InvolvedInstance
  extends Model<InvolvedAttributes>,
    InvolvedAttributes {}

export const Involved = sequelize.define<InvolvedInstance, InvolvedAttributes>(
  "Involved",
  {
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { model: "users", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    requisitionId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: { model: "requisitions", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  });
