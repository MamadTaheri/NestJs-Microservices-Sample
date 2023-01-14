import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('products')
export class ProductController {
    
  @Get()
  all() {
    return 'All Products';
  }
}
