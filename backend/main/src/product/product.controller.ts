import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { ProductDto } from "./product.dto";

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async all() {
    return this.productService.all();
  }

  @EventPattern('product_created')
  // note: Exceptionally, we will also save id because this dto is a mirror from another microservice
  async createMirrorProduct(product: ProductDto) {
    console.log(`RabbitMQ: new product received -> save -> productId: ${product.id}`);
    await this.productService.createMirrorProduct(product)
    console.log('save done');
  }

  @EventPattern('product_updated')
  async updateMirrorProduct(product: ProductDto) {
    console.log(`RabbitMQ: new product received -> update -> productId: ${product.id}`);
    await this.productService.updateMirrorProduct(product.id, product);
    console.log('update done');
  }

  @EventPattern('product_deleted')
  async deleteMirrorProduct(id: number) {
    console.log(`RabbitMQ: new product received -> delete -> productId: ${id}`);
    await this.productService.deleteMirrorProduct(id);
    console.log('delete done');
  }

}
