import { Controller, Req, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { GetUserRequest, GetUserResponse } from 'src/types';

@Controller("user")
export class UserController {

  constructor(private userService: UserService) {}

  @Post("login")
 	async getUser(@Req() request: GetUserRequest): Promise<GetUserResponse> {
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
