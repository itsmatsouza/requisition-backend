import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database";

export interface Project {
  id: number;
  name: string;
}

export interface ProjectCreationAttributes extends Optional<Project, "id"> {}

export interface ProjectInstance
  extends Model<Project, ProjectCreationAttributes>,
    Project {}

export const Project = sequelize.define<ProjectInstance, Project>("Project", {
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
