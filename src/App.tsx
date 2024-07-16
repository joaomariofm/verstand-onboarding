import { useState } from "react"
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
						<Input className="px-8" placeholder="Procurar por produto"/>
					</div>
					<div className="w-1/3">
						<AddProductDialog onSubmitCallback={addProduct} />	
					</div>
				</div>
				<div className="p-2 border border-zinc-300 rounded-lg">
					<Table>
						{ 
							products.length === 0 &&
								<TableCaption>Nenhum registro de produto foi feito ainda</TableCaption>
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
								products.length !== 0 &&
									products.map((product, i) => (
										<TableRow key={i}>
											<TableCell className="font-medium">83kdak2</TableCell>
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
