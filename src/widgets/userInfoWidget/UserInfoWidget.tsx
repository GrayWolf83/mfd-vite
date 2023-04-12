import { Flex, Text } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '~entities/context/Auth'
import { SigninIcon, SignoutIcon } from '~shared/assets'

export const UserInfoWidget = () => {
	const { user, signout } = useAuth()
	const navigate = useNavigate()

	const handleSignout = () => {
		if (signout) {
			signout()
		}
	}

	return (
		<Flex>
			{user ? (
				<Flex align={'center'} gap={10}>
					<Text color='gray.3'>{user}</Text>{' '}
					<SignoutIcon
						width={24}
						style={{ cursor: 'pointer', color: '#dee2e6' }}
						onClick={handleSignout}
					/>
				</Flex>
			) : (
				<SigninIcon
					width={24}
					style={{ cursor: 'pointer', color: '#dee2e6' }}
					onClick={() => navigate('/login')}
				/>
			)}
		</Flex>
	)
}
