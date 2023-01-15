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
    console.log(`new product received -> save -> productId: ${product.id}`);
    await this.productService.createMirrorProduct(product)
  }


}
