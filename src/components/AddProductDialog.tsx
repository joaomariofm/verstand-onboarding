import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { GoPlusCircle } from "react-icons/go"
import { Button } from "@/components/ui/button"
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
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form"

const formSchema = z.object({
	name: z.string(),
	price: z.string().transform(value => Number(value)||0),
	quantity: z.string().transform(value => Number(value)||0),
})

function AddProductDialog() {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			price: 0,
			quantity: 0,
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
	
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

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

							<div className="grid gap-4 py-4">

								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nome</FormLabel>
											<FormControl>
												<Input placeholder="Nome do produto" {...field} />
											</FormControl>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Preço</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Preço do produto"
												/>
											</FormControl>
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="quantity"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Quantidade</FormLabel>
											<FormControl>
												<Input
													{...field}
													placeholder="Quantidade do produto"
												/>
											</FormControl>
										</FormItem>
									)}
								/>

							</div>

							<DialogFooter>
								<Button type="submit">Adicionar</Button>
							</DialogFooter>
						</form>
					</Form>
				</DialogContent>
			</Dialog>
		</>
	)
}

export { AddProductDialog }
