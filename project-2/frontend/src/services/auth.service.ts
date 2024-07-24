import { SignJWT, jwtVerify } from "jose";
import { cookies } from 'next/headers';
import User from "@/models/user";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export default class AuthService {

	public static EXPIRING_TIME = 24 * 60 * 60 * 1000;

	static async encrypt(payload: any): Promise<string>{
		return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
	}

	static async decrypt(token: string): Promise<any> {
		const { payload } = await jwtVerify(token, key, {
			algorithms: ["HS256"],
		});
		return payload;
	}

	static async createSession(user: User): Promise<void> {
		const expires = new Date(Date.now() + this.EXPIRING_TIME);
		const session = await this.encrypt(user);
		cookies().set("session", session, { expires, httpOnly: true });
	}
} 
