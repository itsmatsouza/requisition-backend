import { ResourceWithOptions } from "adminjs";
import { Department, User, Workflow } from "../../models";
import { departmentResourceOptions } from "./department";
import { userResourceOptions } from "./user";
import { workflowResourceOptions } from "./workflow";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Department,
    options: departmentResourceOptions,
  },
  {
    resource: User,
    options: userResourceOptions,
  },
  {
    resource: Workflow,
    options: workflowResourceOptions,
  }
];
