import express from "express"
import { adminJs, adminJsRouter } from "./adminjs"
import { router } from "./routes";

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server started sucessfuly at port ${PORT}`)
})