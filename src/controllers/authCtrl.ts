import {Request,Response} from 'express'
import User from "../models/user"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Registrarse
export const registro = async (req: Request, res: Response) => {

    // Comprobar si el email existe
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(400).json({error: true, msg: 'El usuario existe'})
    }

    // Grabamos usuario
    const newUser = new User(req.body)
    try {
        await newUser.save()
        return res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json(error)
    }    
}

//Loguearse
export const login = async (req: Request, res: Response) => {

    // Comprobar si el email existe
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({error: 1, msg: 'El usuario no existe'})
    }

    // comparamos contraseña
    const passValida = await bcrypt.compare(req.body.password, user.password)
    
    if(!passValida) return res.status(400).json({
        error: 2, msg: 'Las contraseñas no coinciden'})

    // Creando el token
    const token = jwt.sign({
        name: user.email,
        id: user.id
    }, `${process.env.TOKEN_SECRET}`,
    { expiresIn: '1h' }
    )

    res.header('auth-token', token).json({
    token
    })
}

