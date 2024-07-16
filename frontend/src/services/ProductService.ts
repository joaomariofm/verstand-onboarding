import axios from '../fetch/axios';

export class ProductService {
	static async getProducts() {
		return axios.get('products/list');
	}
}
