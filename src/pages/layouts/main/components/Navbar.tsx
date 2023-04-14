import { Navbar, NavLink as MantineLink } from '@mantine/core'
import { NavLink, useLocation } from 'react-router-dom'

const menuItems: { label: string; path: string }[] = [
	{
		label: 'Главная',
		path: '/',
	},
	{
		label: 'Персонажи',
		path: '/category/character',
	},
	{
		label: 'Локации',
		path: '/category/location',
	},
	{
		label: 'Эпизоды',
		path: '/category/episode',
	},
]

export const AppNavbar = () => {
	const location = useLocation()

	return (
		<Navbar width={{ base: 130, sm: 250 }} p='xs' bg={'main-green'}>
			{menuItems.map((item) => {
				const category = item.path.split('/')[2]

				const style = location.pathname.includes(category)
					? { border: '1px solid #dee2e6' }
					: {}

				return (
					<Navbar.Section mt={10} key={item.path}>
						<NavLink to={item.path}>
							<MantineLink
								label={item.label}
								active={location.pathname === item.path}
								style={style}
							/>
						</NavLink>
					</Navbar.Section>
				)
			})}
		</Navbar>
	)
}
