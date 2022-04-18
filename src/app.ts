import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'

class Server {
    app: Application
    port: string
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
        this.middleware()
    }
    middleware() {
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`\nServidor corriendo en el puerto ${this.port}\n`)
        })
    }
}

export default Server