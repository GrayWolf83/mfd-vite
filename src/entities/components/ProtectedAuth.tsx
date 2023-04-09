import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '~entities/context/Auth'

interface ProtectedAuthProps {
	children: React.ReactNode
}

export const ProtectedAuth = ({ children }: ProtectedAuthProps) => {
	const { user } = useAuth()
	const location = useLocation()

	if (!user) {
		return (
			<Navigate
				to={'/login'}
				state={{ from: location.pathname }}
				replace
			/>
		)
	}

	return <>{children}</>
}
