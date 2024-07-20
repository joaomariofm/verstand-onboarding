import "./globals.css"
import TanStackProvider from "../providers/tanstack.provider"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
			<TanStackProvider>
				<body>{children}</body>
			</TanStackProvider>
    </html>
  )
}
