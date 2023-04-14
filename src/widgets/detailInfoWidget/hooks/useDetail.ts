import { useEffect, useState } from 'react'
import axios from 'axios'
import { DetailInfo } from '../models/Detail'

export const useDetail = (category: string, id: number) => {
	const [item, setItem] = useState<DetailInfo>()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		if (category) {
			setLoading(true)
			setError(false)

			axios({
				method: 'GET',
				url: `https://rickandmortyapi.com/api/${category}/${id}`,
			})
				.then((res) => {
					setItem(res.data)
				})
				.catch((e) => {
					setError(true)
					console.error(e)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [category, id])

	return { item, loading, error }
}
