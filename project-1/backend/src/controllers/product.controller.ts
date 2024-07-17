import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from 'src/services/product.service';
import { Product } from '@prisma/client';
import { Prisma } from '@prisma/client';

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("list")
  async getProducts(): Promise<Product[]> {
    return this.productService.products();
  }

	@Post("create")
	async createProduct(@Body() data: Prisma.ProductCreateInput): Promise<Product> {
		return this.productService.create(data);
	}
}
