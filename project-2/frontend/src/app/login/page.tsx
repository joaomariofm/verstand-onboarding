import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
	return (
		<div className="container w-screen h-screen flex items-center justify-center py-4">
			<Card className="w-80">
				<CardHeader>
					<CardTitle>Login</CardTitle>	
				</CardHeader>
				<CardContent>
					<form className="flex flex-col gap-5">
						<div className="flex flex-col gap-3">
							<div className="flex flex-col space-y-2">
								<Label htmlFor="name">E-mail</Label>
								<Input placeholder="Type your e-mail"/>
							</div>
							<div className="flex flex-col space-y-2">
								<Label htmlFor="name">Password</Label>
								<Input placeholder="Type your password"/>
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
