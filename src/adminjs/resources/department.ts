import { ResourceOptions } from "adminjs";

export const departmentResourceOptions: ResourceOptions = {
  navigation: 'Cadastros',
  editProperties: ['name', 'number'],
  filterProperties: ['name', 'number', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'name', 'number'],
  showProperties: ['id', 'name', 'number', 'createdAt', 'updatedAt'],
}