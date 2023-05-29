import {
    Router
} from "express";
import {
    authRouter
} from './auth'
import {
    suggestionRouter
} from './suggestions'

const router = Router()

router.use('/auth', authRouter)
router.use('/suggestions', suggestionRouter)

export { router }