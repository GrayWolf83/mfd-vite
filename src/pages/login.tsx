import { Box } from '@mantine/core'
import { SigninWidget } from '~widgets/signinWidget'

const Login = () => {
	return (
		<Box maw={500} mx='auto' pt={'20vh'}>
			<SigninWidget />
		</Box>
	)
}

export default Login
