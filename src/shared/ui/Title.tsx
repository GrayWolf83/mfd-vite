import { Title, TitleProps } from '@mantine/core'

export const AppTitle = (props: TitleProps) => {
	return (
		<Title color='main-green' {...props}>
			{props.children}
		</Title>
	)
}
