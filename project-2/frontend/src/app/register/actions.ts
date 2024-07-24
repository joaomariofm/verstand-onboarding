'use server'

import UserService from "@/services/user.service";

export async function register(_currentState: unknown, formData: FormData): Promise<any> {

	const name = formData.get('name') as string;
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	try {
		const response: any = await UserService.register(name, email, password);
		return response.message;
	} catch (error: any) {
		return error.message;
	}
}

