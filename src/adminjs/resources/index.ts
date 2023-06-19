import { ResourceWithOptions } from "adminjs";
import { Department, RequisitionItem, User, Requisition, RequisitionStatus, Project, UnitOfMeasurement, TaxItemNumber } from "../../models";
import { departmentResourceOptions } from "./department";
import { userResourceOptions } from "./user";
import { requisitionResourceFeatures, requisitionResourceOptions } from "./requisition";
import { requisitionItemResourceOptions } from "./requisitionItem";
import { requisitionStatusResourceOptions } from "./requisitionStatus";
import { projectResourceOptions } from "./project";
import { taxItemNumberResourceOptions } from "./taxItemNumber";
import { unitOfMeasurementResourceOptions } from "./unitOfMeasurement";
import { sendToResourceOptions } from "./sendTo";
import { SendTo } from "../../models/SendTo";

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
    resource: Requisition,
    options: requisitionResourceOptions,
    features: requisitionResourceFeatures
  },
  {
    resource: RequisitionItem,
    options: requisitionItemResourceOptions,
  },
  {
    resource: RequisitionStatus,
    options: requisitionStatusResourceOptions
  },
  {
    resource: Project,
    options: projectResourceOptions
  },
  {
    resource: TaxItemNumber,
    options: taxItemNumberResourceOptions
  },
  {
    resource: UnitOfMeasurement,
    options: unitOfMeasurementResourceOptions
  },
  {
    resource: SendTo,
    options: sendToResourceOptions
  }
];
