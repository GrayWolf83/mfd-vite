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
		<Navbar width={{ base: 250 }} p='xs' bg={'main-green'}>
			{menuItems.map((item) => (
				<Navbar.Section mt={10} key={item.path}>
					<NavLink to={item.path}>
						<MantineLink
							label={item.label}
							active={location.pathname === item.path}
						/>
					</NavLink>
				</Navbar.Section>
			))}
		</Navbar>
	)
}
