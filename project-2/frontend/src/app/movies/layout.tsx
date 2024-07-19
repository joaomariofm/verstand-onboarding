import TanStackProvider from "../../providers/tanstack.provider"

export default function MoviesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
				<TanStackProvider>
					{children}
				</TanStackProvider>
			</body>
    </html>
  )
}
