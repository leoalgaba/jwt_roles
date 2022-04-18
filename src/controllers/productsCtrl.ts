import {Request,Response} from 'express'

// Crear productos
export const createProduct = (req: Request, res: Response) => {
    res.json({
        message: 'Crear producto'
    })
}

// Obtener productos
export const getProducts = (req: Request, res: Response) => {
    res.json({
        message: 'Obtener productos'
    })
}

// Obtener producto por ID
export const getProduct = (req: Request, res: Response) => {
    res.json({
        message: 'Obtener producto por ID'
    })
}

// Actualizar producto por ID
export const updateProduct = (req: Request, res: Response) => {
    res.json({
        message: 'Actualizar producto por ID'
    })
}

// Borrar producto por ID
export const deleteProduct = (req: Request, res: Response) => {
    res.json({
        message: 'Borrar producto por ID'
    })
}
