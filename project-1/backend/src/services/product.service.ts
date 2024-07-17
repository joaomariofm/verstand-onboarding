import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { Product, Prisma } from "@prisma/client";

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async products(): Promise<Product[]> {
		return this.prisma.product.findMany();
	}

	async create(data: Prisma.ProductCreateInput): Promise<Product> {
		return this.prisma.product.create({ data });
	}
}
