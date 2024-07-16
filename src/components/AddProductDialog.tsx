import { GoPlusCircle } from "react-icons/go"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function AddProductDialog() {
	return (
		<>
			<Dialog>
				<DialogTrigger className="w-full" asChild>
					<Button>
						<GoPlusCircle className="h-[18px] w-[18px] mr-2"/>
						Adicionar produto
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Adicionar Produto</DialogTitle>
						<DialogDescription>
							Preencha os campos abaixo para adicionar um novo produto.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Nome
							</Label>
							<Input
								id="name"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="price" className="text-right">
								Preço
							</Label>
							<Input
								id="price"
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="quantity" className="text-right">
								Quantidade
							</Label>
							<Input
								id="quantity"
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Adicionar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}

export { AddProductDialog }
