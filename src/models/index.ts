import { Department } from "./Department";
import { User } from "./User";
import { Workflow } from "./Workflow";

Department.hasMany(User, { as: 'users' })
User.belongsTo(Department);

export { Department, User, Workflow };
