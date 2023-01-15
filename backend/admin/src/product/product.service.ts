import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createOrUpdateProductDto } from './product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async all(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async create(data: createOrUpdateProductDto): Promise<Product> {
    return await this.productRepository.save(data);
  }

  async get(id: number): Promise<Product> {
    const queryResult = await this.productRepository.findOne({
      where: {
        id,
      },
    });

    if (!queryResult) throw new NotFoundException();

    return queryResult;
  }

  async update(id: number, data: createOrUpdateProductDto): Promise<any> {
    const queryResult = await this.productRepository.update(id, data);

    if (queryResult.affected) return 'Product Updated successfully';

    return 'A Problem happend';
  }

  async delete(id: number): Promise<any> {
    const queryResult = await this.productRepository.delete(id);

    if(!queryResult.affected) throw  new NotFoundException();

    return queryResult;
  }
}
