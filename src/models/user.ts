import {
    pre,
    prop,
    getModelForClass,
    modelOptions,
    Ref} from '@typegoose/typegoose'
import {Role} from './roles'
import bcrypt from 'bcryptjs'

// opciones de modelo
@modelOptions({
    schemaOptions: {
        timestamps: true,
        versionKey: false
    }
})

// Encriptar constraseña
@pre<User>('save', async function() {
    this.password = await bcrypt.hash(this.password, 10)
})

// esquema usuario
class User {

    @prop({required: true})
    name: string

    @prop({required: true, unique: true})
    email: string

    @prop({required: true})
    password: string

    @prop({ref: () => Role})
    role: Ref<Role> []

}

const UserModel = getModelForClass(User)
export default UserModel
