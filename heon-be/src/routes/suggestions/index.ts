import {
  Router
} from 'express'
import {
  userValidator
} from '../../middlewares/common'
import {
  createSuggestion
} from '../../controllers/suggestions'

const suggestionRouter = Router();

suggestionRouter.post("/", userValidator, createSuggestion);

export { suggestionRouter };