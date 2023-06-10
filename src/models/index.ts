import { Department } from "./Department";
import { User } from "./User";
import { Workflow } from "./Workflow";
import { Step } from "./Step";

Department.hasMany(User, { as: "users" });
User.belongsTo(Department);

Workflow.hasMany(Step, { as: "steps" })
Step.belongsTo(Workflow)

export { Department, User, Workflow, Step };
