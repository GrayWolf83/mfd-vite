import { useParams } from 'react-router-dom'
import { ErrorBoundary } from '~shared/hoc/ErrorBoundary'
import { Title } from '~shared/ui'
import { DetailInfoWidget } from '~widgets/detailInfoWidget'

const Detail = () => {
	const { id, category } = useParams()

	return (
		<>
			<Title order={2}>Detail information</Title>
			<ErrorBoundary>
				<DetailInfoWidget category={category || ''} id={Number(id)} />
			</ErrorBoundary>
		</>
	)
}

export default Detail
