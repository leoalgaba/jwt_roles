import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

// opciones de modelo
@modelOptions({
    schemaOptions: {
        versionKey: false
    }
})

export class Role {

    @prop()
    name: string

}
const RoleModel = getModelForClass(Role)
export default RoleModel


