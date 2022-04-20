import { Router } from "express"
import { validateProducts } from "../validator"
import {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct } from "../controllers/productsCtrl"

const router = Router()

// Crear productos
router.post('/', validateProducts, createProduct)

// Obtener productos
router.get('/', getProducts)

// Obtener producto por ID
router.get('/:id', getProduct)

// Actualizar producto por ID
router.put('/:id', updateProduct)

// Borrar producto por ID
router.delete('/:id', deleteProduct)

export default router