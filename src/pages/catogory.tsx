import { useParams } from 'react-router-dom'
import { Title } from '~shared/ui'
import { CategoriesListWidget } from '~widgets/categoriesListWidget'

const Category = () => {
	const { category } = useParams()

	return (
		<>
			<Title order={2}>Category {category}</Title>
			<CategoriesListWidget category={category || ''} />
		</>
	)
}

export default Category
