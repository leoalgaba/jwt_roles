import {Request,Response} from 'express'
import Product from '../models/products'

// Crear productos
export const createProduct = async (req: Request, res: Response) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.status(400).send(error)
    }
}

// Obtener productos
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.send(products)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Obtener producto por ID
export const getProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Actualizar producto por ID
export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    const prodput = req.body
    try {
        const product = await Product.findByIdAndUpdate(id, prodput, {new: true})
        res.send(product)
    } catch (error) {
        res.status(500).send(error)
    }
}

// Borrar producto por ID
export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        await Product.findByIdAndRemove(id)
        res.send('Producto eliminado')
    } catch (error) {
        res.status(500).send(error)
    }
}
