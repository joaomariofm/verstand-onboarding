export default class AuthService {
	static async login(email: string, password: string): Promise<any>{
		const response = await fetch('http://localhost:3001/user/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({email, password})
		});

		const parsedResponse = await response.json();

		if (parsedResponse.status !== 200) {
			throw new Error('Invalid credentials');
		}
	
		return parsedResponse;
	}
}
