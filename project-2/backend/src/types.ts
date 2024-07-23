import { Request } from 'express';
import { Movie } from '@prisma/client';

export interface ControllerResponse {
	status: number;
	message?: string;
}

export interface GetUserRequest extends Request {
	body: {
		email: string;
		password: string;
	}
}

export interface GetUserResponse extends ControllerResponse {
	user?: {
		id: string,
		email: string
	};
}

export interface GetMoviesResponse extends ControllerResponse {
	movies?: Movie[];
}
