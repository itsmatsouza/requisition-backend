import { ResourceOptions } from "adminjs";

export const sendToResourceOptions: ResourceOptions = {
  navigation: "Fluxos",
  editProperties: ["requisitionId", "userId"],
  filterProperties: ["requisitionId", "userId", "createdAt", "updatedAt"],
  listProperties: ["id", "requisitionId", "userId"],
  showProperties: ["id", "requisitionId", "userId", "createdAt", "updatedAt"],
};
