import { TextInput, Group, Card } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '~entities/context/Auth'
import { Button, Title } from '~shared/ui'

export const SigninWidget = () => {
	const { signin } = useAuth()
	const navigate = useNavigate()
	const location = useLocation()
	const form = useForm({
		initialValues: {
			username: '',
		},

		validate: {
			username: (value) => (value ? null : 'Обязательное поле'),
		},
	})

	const handleSubmit = form.onSubmit((values) => {
		if (signin) {
			signin(values?.username, () => {
				navigate(location.state?.from || '/')
			})
		}
	})

	return (
		<Card shadow='sm' padding='lg' radius='md' withBorder p={'xl'}>
			<Title order={2} align='center'>
				Авторизация
			</Title>
			<form onSubmit={handleSubmit}>
				<TextInput
					withAsterisk
					label='Имя'
					placeholder='Ваше имя'
					{...form.getInputProps('username')}
				/>

				<Group position='center' mt='md'>
					<Button bg={'main-green'} type='submit'>
						Войти
					</Button>
				</Group>
			</form>
		</Card>
	)
}
