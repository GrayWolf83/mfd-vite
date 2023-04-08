import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '~pages/layouts'
import { Loader } from '~shared/ui'

const Home = lazy(() => import('~pages/home'))
const Category = lazy(() => import('~pages/catogory'))

const Routing = () => {
	return (
		<Suspense
			fallback={<Loader size='lg' style={{ paddingTop: '30vh' }} />}>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='category/:category' element={<Category />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default Routing
