'use client'

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { register } from "./actions"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { redirect } from "next/navigation"

export default function LoginPage() {
	const [response, dispatch] = useFormState(register, undefined);

	useEffect(() => {
		if (response?.status === 201) return redirect("/movies")
	}, [response]);

	return (
		<div className="container w-screen h-screen flex items-center justify-center py-4">
			<Card className="w-80">
				<CardHeader>
					<CardTitle>Cadastro</CardTitle>	
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<form className="flex flex-col gap-5" action={dispatch}>
						<div className="flex flex-col gap-3">
							<div className="flex flex-col space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input type="text" name="name" placeholder="Type your name"/>
							</div>
							<div className="flex flex-col space-y-2">
								<Label htmlFor="name">E-mail</Label>
								<Input type="email" name="email" placeholder="Type your e-mail"/>
							</div>
							<div className="flex flex-col space-y-2">
								<Label htmlFor="name">Password</Label>
								<Input type="password" name="password" placeholder="Type your password"/>
							</div>
						</div>
						<div className="flex justify-center">
							<Button className="w-full">Register</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
