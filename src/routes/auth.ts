import {Router} from 'express'
import {login,registro} from '../controllers/authCtrl'
import {validateRegistro, validateLogin} from '../validator'

const router = Router()

//Registrarse
router.post('/register',validateRegistro,registro)

//Loguearse
router.post('/login', validateLogin, login)

export default router
