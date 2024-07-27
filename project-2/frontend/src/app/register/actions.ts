'use server'

import { ActionResponse } from "@/types";
import UserService from "@/services/user.service";

export async function register(_currentState: unknown, formData: FormData): Promise<ActionResponse> {

	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	return await UserService.register(name, email, password);
}

