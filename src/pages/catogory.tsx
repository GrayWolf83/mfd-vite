import { useParams } from 'react-router-dom'

const Category = () => {
	const { category } = useParams()

	return <h2>Category {category}</h2>
}

export default Category
