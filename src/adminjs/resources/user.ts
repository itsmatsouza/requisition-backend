import { ResourceOptions } from "adminjs";

export const userResourceOptions: ResourceOptions = {
  navigation: "Cadastros",
  properties: {
    password: {
      type: 'password'
    },
    role: {
      // Cria uma lista no AdminJS
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'user', label: 'Usuário Padrão' }
      ]
    }
  },
  editProperties: [
    "firstName",
    "lastName",
    "email",
    "password",
    "role",
    "responsability",
    "departmentId",
  ],
  filterProperties: [
    "firstName",
    "lastName",
    "email",
    "role",
    "responsability",
    "departmentId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: [
    "id",
    "firstName",
    "lastName",
    "email",
    "role",
    "responsability",
    "departmentId",
  ],
  showProperties: [
    "id",
    "firstName",
    "lastName",
    "email",
    "password",
    "role",
    "responsability",
    "departmentId",
    "createdAt",
    "updatedAt",
  ],
};
