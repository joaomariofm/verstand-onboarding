import { createHash } from 'crypto'

export class HashService {
	static hashPassword(password: string): string {
		return createHash('sha256').update(password).digest('hex');
	}
}
