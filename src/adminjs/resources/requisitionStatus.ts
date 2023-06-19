import { ResourceOptions } from "adminjs";

export const requisitionStatusResourceOptions: ResourceOptions = {
  navigation: "Recursos",
  editProperties: ["name"],
  filterProperties: ["name", "createdAt", "updatedAt"],
  listProperties: ["id", "name"],
  showProperties: ["id", "name", "createdAt", "updatedAt"],
};
