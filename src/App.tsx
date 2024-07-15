import { GoSearch } from "react-icons/go"
import { Input } from "./components/ui/input"
import {
	Table,
	TableHeader,
	TableCaption,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
} from "./components/ui/table"

function App() {
  return (
		<>
			<div className="mt-5 max-w-5xl mx-auto">

				<h1 className="text-4xl font-bold">Produtos</h1>

				<div className="py-5">
					<div className="relative">
						<GoSearch className="absolute h-[16px] w-[16px] left-2 top-1/2 transform -translate-y-1/2 top-text-zinc-500" />
						<Input className="px-8" placeholder="Procurar por produto"/>
					</div>
				</div>

				<div className="p-2 border border-zinc-300 rounded-lg">
					<Table>

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
								Array.from({ length: 10 }).map((_, i) => (
									<TableRow key={i}>
										<TableCell className="font-medium">83kdak2</TableCell>
										<TableCell>nome do produto</TableCell>
										<TableCell>R$ 250,00</TableCell>
										<TableCell className="text-center">58</TableCell>
									</TableRow>
								))
							}	
						</TableBody>

						<TableCaption>A list of your recent invoices.</TableCaption>
					</Table>
				</div>
			</div>
		</>
  )
}

export default App
