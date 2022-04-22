import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose'

// opciones de modelo
@modelOptions({
    schemaOptions: {
        timestamps: true,
        versionKey: false
    }
})

// esquema producto
class Product {

    @prop({required: true})
    name: string

    @prop({required: true})
    categoria: string

    @prop({required: true})
    precio: number

    @prop({required: true})
    imgURL: string

}

// exportar modelo
const ProductModel = getModelForClass(Product)
export default ProductModel

