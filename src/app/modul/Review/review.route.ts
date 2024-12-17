import express from 'express';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';
import { ReviewsControllers } from './review.controller';

const router = express.Router()

router.post('/', auth(USER_ROLE.user, USER_ROLE.user), ReviewsControllers.createReviews)

router.get('/', ReviewsControllers.getAllReviews)


export const ReviewsRouter = router 