import {prop, getModelForClass} from '@typegoose/typegoose'

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

const ProductModel = getModelForClass(Product)
export default ProductModel

