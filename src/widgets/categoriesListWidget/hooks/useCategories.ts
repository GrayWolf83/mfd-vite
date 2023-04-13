import { useEffect, useState } from 'react'
import axios from 'axios'
import { CategoriesData } from '../models/categoriesData'

export const useCategories = (category: string, page: number) => {
	const [items, setItems] = useState<any[]>([])
	const [hasNextPage, setHasNextPage] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setItems([])
	}, [category])

	useEffect(() => {
		if (category) {
			setLoading(true)

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
					console.error(e)
				})
				.finally(() => {
					setLoading(false)
				})
		}
	}, [category, page])

	return { categories: items, loading, hasNextPage }
}
