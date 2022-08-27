import { Router } from 'express'
import { retrieveProducts, addProduct, deleteProduct, editProduct } from '../controllers/productController'
const router = Router()

router.get('/', retrieveProducts)
router.post('/', addProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', editProduct)

export default router
