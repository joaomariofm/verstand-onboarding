import { cookies } from 'next/headers';
import User from "@/models/user";
import AuthService from "./auth.service";

const EXPIRING_TIME = 24 * 60 * 60 * 1000;

export default class UserService {
	static async login(email: string, password: string): Promise<void>{
		const response = await fetch('http://localhost:3001/user/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({email, password})
		});

		const { status, user } = await response.json();
		
		if (status !== 200) {
			throw new Error('Invalid credentials');
		}

		const expires = new Date(Date.now() + EXPIRING_TIME);
		const session = await AuthService.encrypt(user as User);

		cookies().set("session", session, { expires, httpOnly: true });
	}
}
