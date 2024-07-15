import {
	Table,
	TableHeader,
	TableCaption,
	TableRow,
	TableHead,
	TableBody,
	TableCell
} from "./components/ui/table"

function App() {
  return (
		<>
			<div className="mt-5 max-w-5xl mx-auto">
				<h1 className="text-4xl font-bold">Produtos</h1>

				<div className="py-4">
					<Table>

						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Invoice</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Method</TableHead>
								<TableHead className="text-right">Amount</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{
								Array.from({ length: 10 }).map((_, i) => (
									<TableRow key={i}>
										<TableCell className="font-medium">INV001</TableCell>
										<TableCell>Paid</TableCell>
										<TableCell>Credit Card</TableCell>
										<TableCell className="text-right">$250.00</TableCell>
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
