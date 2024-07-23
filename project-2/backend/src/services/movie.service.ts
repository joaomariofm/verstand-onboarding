import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class MovieService {

	constructor(private prisma: PrismaService) {}

	async movies() {
		return this.prisma.movie.findMany()
	}
}
