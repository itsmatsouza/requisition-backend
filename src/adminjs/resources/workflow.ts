import { ResourceOptions } from "adminjs";

export const workflowResourceOptions: ResourceOptions = {
  navigation: "Fluxos",
  properties: {
    status: {
      // Cria uma lista no AdminJS
      availableValues: [
        { value: 'approved', label: 'Aprovado' },
        { value: 'notApproved', label: 'Não Aprovado' },
        { value: 'waiting', label: 'Aguardando'}
      ]
    }
  },
  editProperties: [
    "name",
    "description",
    "owner",
    "finished",
    "status",
    "attachmentUrl",
  ],
  filterProperties: [
    "name",
    "description",
    "owner",
    "finished",
    "status",
    "attachmentUrl",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "name",
    "description",
    "owner",
    "finished",
    "status",
    "attachmentUrl",
  ],
  showProperties: [
    "name",
    "description",
    "owner",
    "finished",
    "status",
    "attachmentUrl",
    "createdAt",
    "updatedAt",
  ],
};
