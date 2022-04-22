import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import productsRoute from './routes/products'
import authRoute from './routes/auth'
import { createRoles } from './initialSetup'

class Server {
    app: Application
    port: string
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.middleware()
        this.routes()
    }
    middleware() {
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
    }
    routes() {
        this.app.use('/api/products', productsRoute)
        this.app.use('/api/auth', authRoute)
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`\nServidor corriendo en el puerto ${this.port}\n`)
        })

    createRoles()

    }
}

export default Server
