import { SignJWT, jwtVerify } from "jose";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export default class AuthService {
	static async encrypt(payload: any) {
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
} 
