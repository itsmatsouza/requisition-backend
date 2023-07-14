import express from 'express'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
import { usersController } from './controllers/usersController'
import { requisitionController } from './controllers/requisitionController'
import { requisitionItemController } from './controllers/requisitionItemController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/users/current/approval', ensureAuth, usersController.approval)
router.get('/users/current/approvallist', ensureAuth, usersController.approval)
router.get('/users/current/involved', ensureAuth, usersController.involved)

router.post('/requisitions/create', ensureAuth, requisitionController.create)
router.get('/requisitions/search', ensureAuth, requisitionController.search)
router.get('/requisitions/:id', ensureAuth, requisitionController.show)

router.post('/requisitions/items/create', ensureAuth, requisitionItemController.create)
router.put('/requisitions/items/:id/update', ensureAuth, requisitionItemController.update)

export { router }