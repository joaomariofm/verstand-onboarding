'use server'

import UserService from "@/services/user.service";

export async function login(_currentState: unknown, formData: FormData): Promise<any> {

	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	try {
		const response: any = await UserService.login(email, password);
		return response.message;
	} catch (error: any) {
		return error.message;
	}
}

