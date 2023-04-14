import { Text } from '@mantine/core'
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

interface State {
	hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: any) {
		super(props)

		this.state = {
			hasError: false,
		}
	}

	getDerivedStateFromError(_: Error): State {
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(error.message)
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return <Text color='red'>Произошла ошибка!</Text>
		}

		return this.props.children
	}
}
