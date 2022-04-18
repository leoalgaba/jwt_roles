import express, {Application} from 'express'

class Server {
    app: Application
    port: string
    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`\nServidor corriendo en el puerto ${this.port}\n`)
        })
    }
}

export default Server