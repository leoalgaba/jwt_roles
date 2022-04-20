import {Router} from 'express'
import {login,registro} from '../controllers/authCtrl'

const router = Router()

//Registrarse
router.post('/register',registro)

//Loguearse
router.post('/login',login)

export default router
