import { Controller, Req, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from 'src/services/user.service';

interface LoginRequest extends Request {
	body: {
		email: string;
		password: string;
	}	
}

interface LoginResponse {
	status: number;
	message?: string;
	user?: { id: string , email: string };	
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
				message: "OK",
				user: user
			}
		} catch (error) {
			return {
				status: HttpStatus.UNAUTHORIZED,
				message: error.message
			}
		}
	}
}
