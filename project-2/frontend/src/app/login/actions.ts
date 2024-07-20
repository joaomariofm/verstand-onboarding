'use server'

import AuthService from "@/services/auth.service"

export async function login(_currentState: unknown, formData: FormData): Promise<any> {

	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	try {
		return await AuthService.login(email, password);
	} catch (error: any) {
		return error.message;
	}
}

