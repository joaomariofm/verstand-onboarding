'use server'

import { ActionResponse } from "@/types";
import UserService from "@/services/user.service";

export async function login(_currentState: unknown, formData: FormData): Promise<ActionResponse>{

	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	return await UserService.login(email, password);
}

