import { Department } from "./Department";
import { User } from "./User";
import { Requisition } from "./Requisition";
import { RequisitionItem } from "./RequisitionItem";
import { RequisitionStatus } from "./RequisitionStatus";
import { Project } from "./Project";
import { TaxItemNumber } from "./TaxItemNumber";
import { UnitOfMeasurement } from "./UnitOfMeasurement";
import { InApproval } from "./InApproval";

Department.hasMany(User, { as: "users" });
User.belongsTo(Department);

User.hasMany(Requisition, { as: "requisitions" });
Requisition.belongsTo(User);

Department.hasMany(Requisition, { as: "requisitions" });
Requisition.belongsTo(Department);

RequisitionStatus.hasMany(Requisition, { as: "requisitions" });
Requisition.belongsTo(RequisitionStatus);

Project.hasMany(Requisition, { as: "requisitions" });
Requisition.belongsTo(Project);

Requisition.hasMany(RequisitionItem, { as: "requisitionItems" });
RequisitionItem.belongsTo(Requisition);

TaxItemNumber.hasMany(RequisitionItem, { as: "requisitionItems" });
RequisitionItem.belongsTo(TaxItemNumber);

UnitOfMeasurement.hasMany(RequisitionItem, { as: "requisitionItems" });
RequisitionItem.belongsTo(UnitOfMeasurement);

Requisition.belongsToMany(User, { through: InApproval });
User.belongsToMany(Requisition, { through: InApproval });

export {
  Department,
  User,
  Requisition,
  RequisitionItem,
  RequisitionStatus,
  Project,
  TaxItemNumber,
  UnitOfMeasurement,
  InApproval
};
