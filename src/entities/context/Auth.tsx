import { ReactNode, useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const authDefaultValue = {
	user: '',
}

interface AuthProps {
	user: string
	signin?: (username: string, callback: () => void) => void
	signout?: () => void
}

const Auth = createContext<AuthProps>(authDefaultValue)
const USERNAME = 'username'

export function useAuth() {
	return useContext(Auth)
}

interface AuthProviderProps {
	children: ReactNode
}

export function AuthProvider(props: AuthProviderProps) {
	const [user, setUser] = useState(localStorage.getItem(USERNAME) || '')

	function signin(username: string, callback: () => void) {
		localStorage.setItem(USERNAME, username)
		setUser(username)
		callback()
	}

	function signout() {
		localStorage.removeItem(USERNAME)
		setUser('')
	}

	return (
		<Auth.Provider value={{ user, signin, signout }}>
			{props.children}
		</Auth.Provider>
	)
}
