import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/auth/schema/user.schema';




@Schema({
  timestamps: true,
  collection: 'products',
})
export class Product {
  
  @Prop({
    type: String,
    unique: true,
  })
  id: string;
  
  @Prop({
    type: String,
    unique: true,
  })
  productname: string;
  
  @Prop({
    type: String,
    required: true,
  })
  description: string;
  
  @Prop({
    type: Number,
  })
  Start: number;

  @Prop({
    type: Number,
  })
  End: number;
  
  @Prop({
    type: Number,
    required: true,
  })
  duration: number;

  @Prop()
  user:User

}

// create a  schema based on class
export const ProductSchema = SchemaFactory.createForClass(Product);

//  export the document

export type ProductDocument = HydratedDocument<Product>;