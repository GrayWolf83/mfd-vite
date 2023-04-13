import { useEffect, useState } from 'react'
import { CategoriesList } from './components/CategoriesList'
import { useCategories } from './hooks/useCategories'

export const CategoriesListWidget = ({ category }: { category: string }) => {
	const [page, setPage] = useState(1)
	const [currentCategory, setCurrentCategory] = useState('')
	const { categories, loading, hasNextPage } = useCategories(
		currentCategory,
		page,
	)

	useEffect(() => {
		setPage(1)
		setCurrentCategory(category)
	}, [category])

	return (
		<CategoriesList
			categories={categories}
			hasNextPage={hasNextPage}
			loading={loading}
			onChangePage={setPage}
			currentCategory={currentCategory}
		/>
	)
}
