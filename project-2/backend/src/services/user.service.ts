import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { HashService } from './hash.service';

@Injectable()
export class UserService {

	constructor(private prisma: PrismaService) {}

	async login({ email, password}) {
		
		const hashedPassword = HashService.hashPassword(password);

		const user = await this.prisma.user.findUnique({
			where: { email, password: hashedPassword},
			select: {	id: true, name: true, email: true }
		});

		if (!user) throw new Error("Invalid email or password");

		return user;
	}

	async createUser({ name, email, password, }) {
		
		// TODO: check if e-mail is already in use
		
		const hashedPassword = HashService.hashPassword(password);

		const user = await this.prisma.user.create({
			data: { name, email, password: hashedPassword },
		});

		return user;
	}
}
