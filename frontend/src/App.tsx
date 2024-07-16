import { useState, useEffect } from "react"
import { useDebouncedValue } from "./utils/useDebouncedValue"
import { ProductService } from "./services/ProductService"
import { Product } from "@/models/Product"
import { GoSearch } from "react-icons/go"
import { Input } from "./components/ui/input"
import { AddProductDialog } from "@/components/AddProductDialog"
import {
	Table,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	TableCaption,
} from "./components/ui/table"

function App() {

	const [products, setProducts] = useState<Product[]>([])
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
	const debouncedSearchTerm = useDebouncedValue(searchTerm, 500)

	useEffect(() => {
		ProductService.getProducts().then((response) => {
			setProducts(response.data)
		})
		.catch((error) => {
			console.error(error)
		})
	}, [])

	useEffect(() => {
		const filtered = filterProducts(products, debouncedSearchTerm)
		setFilteredProducts(filtered)
	}, [debouncedSearchTerm, products])

	function filterProducts(products: Product[], searchTerm: string) {
		return products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
	}

	function addProduct(values: Product) {
		setProducts(oldProducts => [...oldProducts, values])
  }

  return (
		<>
			<div className="mt-5 max-w-5xl mx-auto">
				<h1 className="text-4xl font-bold">Produtos</h1>
				<div className="py-5 flex items-center gap-4">
					<div className="relative w-2/3">
						<GoSearch className="absolute h-[18px] w-[18px] left-2 top-1/2 transform -translate-y-1/2 top-text-zinc-500" />
						<Input
							className="px-8"
							placeholder="Procurar por produto"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
					<div className="w-1/3">
						<AddProductDialog onSubmitCallback={addProduct} />	
					</div>
				</div>
				<div className="p-2 border border-zinc-300 rounded-lg">
					<Table>
						{ 
							filteredProducts.length === 0 && debouncedSearchTerm === ""
							? <TableCaption>Nenhum registro de produto foi feito ainda</TableCaption>
							: ""
						}
						{ 
							filteredProducts.length === 0 && debouncedSearchTerm !== ""
							? <TableCaption>Nenhum produto encontrado</TableCaption>
							: ""
						}
						<TableHeader>
							<TableRow>
								<TableHead className="w-1/4">ID</TableHead>
								<TableHead className="w-1/4">Nome</TableHead>
								<TableHead className="w-1/4">Preço</TableHead>
								<TableHead className="w-1/4 text-center">Quantidade</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{
								filteredProducts.length !== 0 &&
								filteredProducts.map((product, i) => (
									<TableRow key={i}>
										<TableCell className="font-medium">{i + 1}</TableCell>
										<TableCell>{product.name}</TableCell>
										<TableCell>R$ {product.price.toFixed(2)}</TableCell>
										<TableCell className="text-center">{product.quantity}</TableCell>
									</TableRow>
								))
							}	
						</TableBody>
					</Table>
				</div>
			</div>
		</>
  )
}

export default App
