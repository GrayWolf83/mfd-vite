import { Title, Flex, Header } from '@mantine/core'
import { Link } from 'react-router-dom'
import { ReactIcon } from '~shared/assets'

export const AppHeader = () => {
	return (
		<Header height={60} p='xs' bg={'violet'} style={{ border: 'none' }}>
			<Link to={'/'}>
				<Flex align={'center'} gap={10}>
					<ReactIcon />
					<Title order={2} color='gray.3'>
						MFD
					</Title>
				</Flex>
			</Link>
		</Header>
	)
}
