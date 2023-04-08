import { Flex, Loader } from '@mantine/core'

export function AppLoader(props: any) {
	return (
		<Flex justify={'center'}>
			<Loader color='indigo' variant='bars' {...props} />
		</Flex>
	)
}
