import { useParams } from 'react-router-dom'
import { ErrorBoundary } from '~shared/hoc/ErrorBoundary'
import { Title } from '~shared/ui'
import { CategoriesListWidget } from '~widgets/categoriesListWidget'

const Category = () => {
	const { category } = useParams()

	return (
		<>
			<Title order={2}>Category {category}</Title>
			<ErrorBoundary>
				<CategoriesListWidget category={category || ''} />
			</ErrorBoundary>
		</>
	)
}

export default Category
