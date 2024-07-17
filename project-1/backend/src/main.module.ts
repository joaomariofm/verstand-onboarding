import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [PrismaService, ProductService],
})
export class MainModule {}
