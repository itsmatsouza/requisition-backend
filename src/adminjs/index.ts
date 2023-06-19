import { sequelize } from "../database"
import AdminJS from "adminjs"
import AdminJsExpress from "@adminjs/express"
import AdminJSSequelize from "@adminjs/sequelize"
import { adminJsResources } from "./resources"
import { User } from "../models"
import bcrypt from "bcrypt"

AdminJS.registerAdapter(AdminJSSequelize)

export const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: adminJsResources,
  branding: {
    companyName: 'Nidec Requisition',
    logo: '',
  }
})

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)

// export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(adminJs, {
//   authenticate: async (email, password) => {
//     const user = await User.findOne({ where: {email: email }})

//     if ( user && user.role === 'admin' ) {
//       const matched = await bcrypt.compare(password, user.password)

//       if ( matched ) {
//         return user
//       }

//       return false
//     }
//   },
//   cookiePassword: 'senha do cookie'
// }, null, {
//   resave: false,
//   saveUninitialized: false
// })
