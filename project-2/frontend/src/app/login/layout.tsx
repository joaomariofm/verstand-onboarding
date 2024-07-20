import { AuthStoreProvider } from '../../providers/auth.store.provider'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
		<AuthStoreProvider>
			{children}
		</AuthStoreProvider>
  )
}
