import { ResourceOptions } from "adminjs";

export const taxItemNumberResourceOptions: ResourceOptions = {
  navigation: "Recursos",
  editProperties: ["name", "description"],
  filterProperties: ["name", "description", "createdAt", "updatedAt"],
  listProperties: ["id", "name", "description"],
  showProperties: ["id", "name", "description", "createdAt", "updatedAt"],
};
