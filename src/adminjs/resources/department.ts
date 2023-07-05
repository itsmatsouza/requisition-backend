import { ResourceOptions } from "adminjs";

export const departmentResourceOptions: ResourceOptions = {
  navigation: "Cadastros",
  editProperties: ["name", "number", "userId"],
  filterProperties: ["name", "number", "userId", "createdAt", "updatedAt"],
  listProperties: ["id", "name", "userId", "number"],
  showProperties: ["id", "name", "number", "userId", "createdAt", "updatedAt"],
};
