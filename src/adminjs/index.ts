import { sequelize } from "../database"
import AdminJS from "adminjs"
import AdminJsExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { adminJsResources } from "./resources"

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  branding: {
    companyName: 'Nidec Workflow',
    logo: '',
  }
})

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)