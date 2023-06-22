import express from 'express'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
import { usersController } from './controllers/usersController'
import { requisitionController } from './controllers/requisitionController'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/users/current/approval', ensureAuth, usersController.approval)

router.get('/requisitions/:id/inapproval', ensureAuth, requisitionController.getInApproval)

export { router }