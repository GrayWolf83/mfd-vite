import { MantineProvider } from '@mantine/core'
import Routing from '~processes/routing'
import './App.css'

function App() {
	return (
		<MantineProvider
			theme={{
				colors: {
					'main-green': [
						'#8CE99A',
						'#69DB7C',
						'#51CF66',
						'#40C057',
						'#37B24D',
						'#2F9E44',
						'#015366',
					],
				},
			}}>
			<Routing />
		</MantineProvider>
	)
}

export default App
