import { Controller, Get, Param, Post } from "@nestjs/common";
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { ProductDto } from "./product.dto";
import { HttpService } from "@nestjs/axios";

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly httpService: HttpService
  ) {}

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

  @Post(':id/like')
  async like(@Param('id') id: number){
    const product = await this.productService.findOne(id);

    this.httpService.post(`http://localhost:8000/api/products/${id}/like`).subscribe(
      response => {
        console.log(response);
      }
    )

    return await this.productService.updateMirrorProduct(id, {
      likes: product.likes + 1
    });
  }

}
