import { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoriesData } from '../models/categoriesData'

export const useCategories = (category: string, page: number) => {
	const [items, setItems] = useState<any[]>([])
	const [hasNextPage, setHasNextPage] = useState(false)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		setItems([])
	}, [category])

	useEffect(() => {
		if (category) {
			setLoading(true)
			setError(false)

			axios({
				method: 'GET',
				url: `https://rickandmortyapi.com/api/${category}`,
				params: { page },
			})
				.then((res) => {
					const data: CategoriesData = res.data

					setItems((prev) => {
						return [...prev, ...data.results]
					})
					setHasNextPage(Boolean(data.info.next))
				})
				.catch((e) => {
					setError(true)
					console.error(e)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [category, page])

	return { categories: items, loading, error, hasNextPage }
}
