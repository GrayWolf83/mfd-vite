import { AppShell, Box } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { Header, Navbar } from './components'

const MainLayout = () => {
	return (
		<AppShell navbar={<Navbar />} header={<Header />}>
			<Box
				style={{
					height: 'calc(100vh - 32px - 60px)',
					overflowY: 'auto',
				}}>
				<Outlet />
			</Box>
		</AppShell>
	)
}

export default MainLayout
