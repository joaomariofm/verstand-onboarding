import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async login({ email, password}) {
		const user = await this.prisma.user.findUnique({
			where: {
				email,
				password
			},
			select: {	
				id: true,
				email: true,
			}
		});

		if (!user) {
			throw new Error("Invalid email or password");
		}

		return user;
	}
}
