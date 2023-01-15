import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { createOrUpdateProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async all() {
    return await this.productService.all();
  }

  @Post()
  async create(@Body() body: createOrUpdateProductDto) {
    return await this.productService.create(body);
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    return await this.productService.get(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: createOrUpdateProductDto,
  ) {
    return await this.productService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.productService.delete(id);
  }
}
