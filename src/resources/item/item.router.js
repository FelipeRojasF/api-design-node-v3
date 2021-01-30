import { Router } from 'express'

const router = Router()
const controller = (req,res) => {
    res.send({ message: 'hello'})
}
// /api/item
router
    .route('/')
    .get(controller)
    .post(controller)
// /api/item/:id
router
    .route('/:id')
    .put(controller)
    .delete(controller)
    .get(controller)
export default router
