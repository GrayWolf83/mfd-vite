import { Flex, Loader } from '@mantine/core'

export function AppLoader(props: any) {
	return (
		<Flex justify={'center'}>
			<Loader color='main-green' variant='bars' {...props} />
		</Flex>
	)
}
