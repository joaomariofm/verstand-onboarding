import { Controller, Req, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from 'src/services/user.service';
import { User } from '@prisma/client';

interface LoginRequest extends Request {
	body: {
		email: string;
		password: string;
	}	
}

interface LoginResponse {
	status: number;
	message?: string;
	user?: User;
}

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("login")
 	async getUser(@Req() request: LoginRequest): Promise<LoginResponse> {
		try {
			const user = await this.userService.login({
				email: request.body.email,
				password: request.body.password
			});

			return {
				status: HttpStatus.OK,
				message: "User logged in successfully",
				user
			}
		} catch (error) {
			return {
				status: HttpStatus.UNAUTHORIZED,
				message: error.message
			}
		}
	}
}
