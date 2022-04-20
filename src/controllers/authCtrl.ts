import {Request,Response} from 'express'

////Registrarse
export const registro = async (req: Request, res: Response) => {
    res.json({
        message: 'Registro'
    })
}

//Loguearse
export const login = async (req: Request, res: Response) => {
    res.json({
        message: 'Login'
    })
}
