import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedAuth } from '~entities/components'
import { AuthProvider } from '~entities/context'
import { MainLayout } from '~pages/layouts'
import { Loader } from '~shared/ui'

const Home = lazy(() => import('~pages/home'))
const Category = lazy(() => import('~pages/catogory'))
const Login = lazy(() => import('~pages/login'))

const Routing = () => {
	return (
		<Suspense
			fallback={<Loader size='lg' style={{ paddingTop: '30vh' }} />}>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route
							path='category/:category'
							element={
								<ProtectedAuth>
									<Category />
								</ProtectedAuth>
							}
						/>
					</Route>
					<Route path='/login' element={<Login />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</AuthProvider>
		</Suspense>
	)
}

export default Routing
