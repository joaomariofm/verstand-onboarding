import { Request } from 'express';

export interface ControllerResponse {
	status: number;
	message?: string;
	data?: any
}

export interface GetUserRequest extends Request {
	body: {
		email: string;
		password: string;
	}
}

export interface CreateUserRequest extends Request {
	body: {
		email: string;
		password: string;
		name: string;
	}
}
