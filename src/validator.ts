import {Request, Response, NextFunction} from 'express'
import {check, validationResult} from 'express-validator'

// Validacion para productos
export const validateProducts = [

    // Nombre del producto
    check('name')
    .exists() // Que exista el campo
    .withMessage('Este campo es obligatorio')
    .bail() // corta y pasa a la categoria
    .not()  // que no este
    .isEmpty() // vacio
    .withMessage('Este campo no puede quedar vacio')
    .bail() // corta y pasa a la categoria
    .isString() // que sea un string
    .withMessage ('Este campo debe contener un string')
    .isLength({ min: 3 }) // que tenga una longitud min de 3 carac.
    .withMessage('Este campo debe de tener un minimo de 3 caracteres'),

    // Categoria del producto
    check('categoria')
    .exists() // Que exista el campo
    .withMessage('Este campo es obligatorio')
    .bail() // corta y pasa a la categoria
    .not()  // que no este
    .isEmpty() // vacio
    .withMessage('Este campo no puede quedar vacio')
    .bail() // corta y pasa a la categoria
    .isString() // que sea un string
    .withMessage ('Este campo debe contener un string')
    .isLength({ min: 3 }) // que tenga una longitud min de 3 carac.
    .withMessage('Este campo debe de tener un minimo de 3 caracteres'),

    // Precio del producto
    check('precio')
    .exists() // Que exista el campo
    .withMessage('Este campo es obligatorio')
    .bail() // corta
    .not()  // que no este
    .isEmpty() // vacio
    .withMessage('Este campo no puede quedar vacio')
    .bail() // corta
    .isNumeric() // que sea un numero
    .withMessage ('Este campo debe contener un numero'),

    // Imagen del producto
    check('imgURL')
    .exists() // Que exista el campo
    .withMessage('Este campo es obligatorio')
    .bail() // corta
    .isURL() // que sea una URL
    .withMessage ('Este campo debe contener una URL'),

    // Validacion de errores
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        try {
            errors.throw()
            return next()
        } catch (error) {
            res.status(422).json({error:true, errors: errors.array()})
        }
    }

]

// Validacion para registro
export const validateRegistro = [
    
    // Nombre del usuario
    check('name')
    .exists() // Que exista el campo
    .withMessage('Este campo es obligatorio')
    .bail() // corta y pasa al email
    .not()  // que no este
    .isEmpty() // vacio
    .withMessage('Este campo no puede quedar vacio')
    .bail() // corta y pasa al email
    .isString() // que sea un string
    .withMessage ('Este campo debe contener un string')
    .isLength({ min: 3 }) // que tenga una longitud min de 3 carac.
    .withMessage('Este campo debe de tener un minimo de 3 caracteres'),

    // Email del usuario
    check('email')
    .exists()
    .withMessage('Este campo es obligatorio')
    .bail()    
    .not()
    .isEmpty()
    .withMessage('Este campo no puede quedar vacio')
    .bail()        
    .isEmail()
    .withMessage('El formato de email es erroneo'),

    // Contraseña
    check('password')
    .exists()
    .withMessage('Este campo es obligatorio')
    .bail()    
    .not()
    .isEmpty()
    .withMessage('Este campo no puede quedar vacio')
    .bail()        
    .isString()
    .withMessage ('Este campo debe contener un string')    
    .isLength({ min: 6 })
    .withMessage('Este campo debe de tener un minimo de 6 caracteres'),

    // Validacion de errores
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        try {
            errors.throw()
            return next()
        } catch (error) {
            res.status(422).json({error:true, errors: errors.array()})
        }
    }
]

// validacion para login
export const validateLogin = [
    
    // Email del usuario
    check('email')
    .exists()
    .withMessage('Este campo es obligatorio')
    .bail()    
    .not()
    .isEmpty()
    .withMessage('Este campo no puede quedar vacio')
    .bail()        
    .isEmail()
    .withMessage('El formato de email es erroneo'),

    // Contraseña
    check('password')
    .exists()
    .withMessage('Este campo es obligatorio')
    .bail()    
    .not()
    .isEmpty()
    .withMessage('Este campo no puede quedar vacio')
    .bail()        
    .isString()
    .withMessage ('Este campo debe contener un string')    
    .isLength({ min: 6 })
    .withMessage('Este campo debe de tener un minimo de 6 caracteres'),

    // Manejo de errores
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        try {
            errors.throw()
            return next()
        } catch (error) {
            res.status(422).json({error:true, errors: errors.array()})
        }
    }
]

