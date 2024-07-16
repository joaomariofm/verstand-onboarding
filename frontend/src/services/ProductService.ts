import axios from '../fetch/axios';
import { Product } from '@/models/Product';

export class ProductService {
	static async getProducts() {
		return axios.get('products/list');
	}

	static async addProduct(product: Product) {
		return axios.post('products/create', product);
	}
}
