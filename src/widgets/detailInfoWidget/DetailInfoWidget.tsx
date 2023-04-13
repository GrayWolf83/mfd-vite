import { Loader } from '~shared/ui'
import { DetailCard } from './components/DetailCard'
import { useDetail } from './hooks/useDetail'

interface DetailInfoWidgetProps {
	category: string
	id: number
}

export const DetailInfoWidget = ({ category, id }: DetailInfoWidgetProps) => {
	const { item, loading } = useDetail(category, id)

	return (
		<>
			{item && <DetailCard item={item} />}
			{loading && <Loader />}
		</>
	)
}
