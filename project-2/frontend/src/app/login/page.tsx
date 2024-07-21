'use client'

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from "./actions"
import { useFormState } from "react-dom"

export default function LoginPage() {
	const [message, dispatch] = useFormState(login, undefined);

	return (
		<div className="container w-screen h-screen flex items-center justify-center py-4">
			<Card className="w-80">
				<CardHeader>
					<CardTitle>Login</CardTitle>	
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<div className="w-full flex justify-center text-red-700">
						{message && message}
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
