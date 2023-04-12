import { Button, ButtonProps } from '@mantine/core'

export const AppButton = (props: ButtonProps) => {
	return <Button {...props}>{props.children}</Button>
}
