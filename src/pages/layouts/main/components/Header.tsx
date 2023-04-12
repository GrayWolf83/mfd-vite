import { Title, Flex, Header } from '@mantine/core'
import { Link } from 'react-router-dom'
import { ReactIcon } from '~shared/assets'
import { UserInfoWidget } from '~widgets/userInfoWidget'

export const AppHeader = () => {
	return (
		<Header height={60} p='xs' bg={'main-green'} style={{ border: 'none' }}>
			<Flex align={'center'} justify='space-between'>
				<Link to={'/'}>
					<Flex align={'center'} gap={10}>
						<ReactIcon />
						<Title order={2} color='gray.3'>
							MFD
						</Title>
					</Flex>
				</Link>

				<UserInfoWidget />
			</Flex>
		</Header>
	)
}
