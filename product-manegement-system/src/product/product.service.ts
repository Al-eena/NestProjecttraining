import {
    ConflictException,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
  } from '@nestjs/common';
  import mongoose from 'mongoose';
  import { Product } from './schema/product.schema';
  import { InjectModel } from '@nestjs/mongoose';
  import { Observable } from 'rxjs';
  
  // services are used to interact with database
  @Injectable()
  export class ProductService {
    // inject the db Model
    constructor(
      @InjectModel(Product.productname)
      private productModel: mongoose.Model<Product>,
    ) {}
  

    async addProduct(newProduct: Product): Promise<Product> {
      try {
        const existingProduct = await this.productModel.findOne({
          name: newProduct.productname,
        });
        if (existingProduct) {
          throw new ConflictException('Product already exist');
        } else {
          const res = await this.productModel.create(newProduct);
          return res;
        }
      } catch (err) {
        throw new InternalServerErrorException(err.message);
      }
    }
  
    async getAllProduct(): Promise<Product[]> {
      const res = await this.productModel.find();
      return res;
    }

    async getproductById(id: string): Promise<Product> {
      const res = await this.productModel.findOne({
        id: id,
      });
      if (res) {
        return res;
      } else {
        throw new NotFoundException('Product not found');
      }
    }
  
  
  
    async updateStartEndbyId(id: string, start: number, end: number): Promise<string> {
      const res = await this.productModel.findOneAndUpdate(
        { id: id }, 
        { start: start },
        {end: end } 
      );
      if (!res) {
        throw new NotFoundException('Product not found');
      } else {
        return 'Updated Successfully';
      }
    }


    // delete a Product
    async deleteproduct(id: string): Promise<string> {
      const res = await this.productModel.findOneAndDelete({ id: id });
      if (!res) {
        throw new NotFoundException('Product not found');
      } else {
        return 'Deleted Successfully';
      }
    }
  }