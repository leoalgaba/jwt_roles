import {connect} from 'mongoose'

export const startconnect = async (): Promise<void> => {
    try {
        const db = await connect(`${process.env.URI}`)
        console.log(`\nLa base de datos ${db.connection.name} esta conectada localmente`)
    } catch (error) {
        console.error()
    }
}
