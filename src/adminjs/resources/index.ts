import { ResourceWithOptions } from "adminjs";
import { Department, Step, User, Workflow } from "../../models";
import { departmentResourceOptions } from "./department";
import { userResourceOptions } from "./user";
import { workflowResourceOptions } from "./workflow";
import { stepResourceOptions } from "./step";

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
  },
  {
    resource: Step,
    options: stepResourceOptions,
  }
];
