import { ResourceOptions } from "adminjs";

export const stepResourceOptions: ResourceOptions = {
  navigation: "Fluxos",
  properties: {
    approval: {
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
    "workflowId",
    "approval",
    "attachmentUrl",
  ],
  filterProperties: [
    "name",
    "description",
    "workflowId",
    "approval",
    "attachmentUrl",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "name",
    "description",
    "workflowId",
    "approval",
    "attachmentUrl",
  ],
  showProperties: [
    "name",
    "description",
    "workflowId",
    "approval",
    "attachmentUrl",
    "createdAt",
    "updatedAt",
  ],
};