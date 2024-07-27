import AuthService from "./auth.service";

export default class UserService {
	static async login(email: string, password: string): Promise<any>{
		const response = await fetch('http://localhost:3001/user/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({email, password})
		});

		const parsedResponse = await response.json();
		
		if (parsedResponse.status !== 200) {
			return parsedResponse;
		}

		await AuthService.createSession(parsedResponse.data);

		return parsedResponse;
	}

	static async register(name: string, email: string, password: string): Promise<any>{
		const response = await fetch('http://localhost:3001/user/register', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({name, email, password})
		});

		const parsedResponse = await response.json();

		AuthService.createSession(parsedResponse.data);

		return parsedResponse;
	}
}
