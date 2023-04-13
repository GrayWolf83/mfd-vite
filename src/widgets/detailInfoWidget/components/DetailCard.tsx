import { Avatar, Badge, Card, Flex, Group, NavLink, Text } from '@mantine/core'
import { convertDate } from '~shared/utils/convertDate'
import { getItemData } from '~shared/utils/getItemData'
import { DetailInfo } from '../models/Detail'

interface DetailCardProps {
	item: DetailInfo
}

export const DetailCard = ({ item }: DetailCardProps) => {
	const itemData = getItemData(item)

	return (
		<Card mt={20}>
			<Card.Section p={10}>
				<Flex align='center' gap={10}>
					{item?.image && (
						<Avatar src={item.image} size={72} radius='xl' />
					)}
					<Badge size='lg' color='main-green' radius='xl' p={10}>
						{item.name}
					</Badge>
					<Text ml='auto' pr={5}>
						created: {convertDate(item.created)}
					</Text>
				</Flex>
			</Card.Section>
			{itemData.map((it) => (
				<Card.Section p={10} key={it.key}>
					<Text>
						{it.key}: {it.value}
					</Text>
				</Card.Section>
			))}
			<Card.Section p={10}>
				<Text>
					url:{' '}
					<a
						style={{ color: 'var(--main-green-color)' }}
						target='_blank'
						href={item.url}>
						{item.url}
					</a>
				</Text>
			</Card.Section>
		</Card>
	)
}
