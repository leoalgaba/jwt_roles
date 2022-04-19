import Server from './app'
import {config} from 'dotenv'
import {startconnect} from './database'

config()

startconnect()

const server = new Server()

server.start()