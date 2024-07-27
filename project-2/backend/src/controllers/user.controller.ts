import { Controller, Req, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import {
	ControllerResponse,
	GetUserRequest,
	CreateUserRequest,
} from 'src/types';

@Controller("user")
export class UserController {

  constructor(private userService: UserService) {}

  @Post("login")
 	async getUser(@Req() request: GetUserRequest): Promise<ControllerResponse> {
		try {
			const user = await this.userService.login(request.body);
			return { status: HttpStatus.OK, data: { ...user } }
		} catch (error) {
			return { status: HttpStatus.UNAUTHORIZED, message: error.message }
		}
	}

	@Post("register")
	async createUser(@Req() request: CreateUserRequest): Promise<ControllerResponse>{
		try {
			const user = await this.userService.createUser(request.body);
			return { status: HttpStatus.CREATED, data: { ...user } }
		} catch (error) {
			return { status: HttpStatus.BAD_REQUEST, message: error.message }
		}
	}
}
