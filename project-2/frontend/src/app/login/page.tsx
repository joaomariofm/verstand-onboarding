'use client'

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from "./actions"
import { useFormState } from "react-dom"
import { useEffect, useState } from "react"
import { redirect } from "next/navigation"

export default function LoginPage() {
	const [response, dispatch] = useFormState(login, undefined)
	const [errorMessage, setErrorMessage] = useState("")

	useEffect(() => {
		if (response?.status === 200) return redirect("/movies")
		if (response?.message) setErrorMessage(response?.message)
	}, [response]);

	return (
		<div className="container w-screen h-screen flex items-center justify-center py-4">
			<Card className="w-80">
				<CardHeader>
					<CardTitle>Login</CardTitle>	
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<div className="w-full flex justify-center text-red-700">
						{errorMessage && errorMessage}
					</div>
					<form className="flex flex-col gap-5" action={dispatch}>
						<div className="flex flex-col gap-3">
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
							<Button className="w-full">Login</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	)
}
