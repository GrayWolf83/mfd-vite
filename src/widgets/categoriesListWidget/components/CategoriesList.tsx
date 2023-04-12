import { Card, Flex, Image, Text } from '@mantine/core'
import React, { useCallback, useRef } from 'react'
import { Loader } from '~shared/ui'
import { Category } from '../models/category'

interface CategoriesListProps {
	loading: boolean
	hasNextPage: boolean
	onChangePage: (prev: any) => any
	categories: Category[]
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
	loading,
	hasNextPage,
	onChangePage,
	categories,
}) => {
	const observer: any = useRef()

	const lastNodeRef = useCallback(
		(node: any) => {
			if (loading) return

			if (observer.current) {
				observer.current.disconnect()
			}
			// Позволяет отследить появление элемента на странице
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					onChangePage((prev: any) => prev + 1)
				}
			})

			if (node) {
				observer.current.observe(node)
			}
		},
		[loading, hasNextPage],
	)

	return (
		<>
			<Flex wrap='wrap' gap={10} justify='space-between' mt='md'>
				{Boolean(categories.length) &&
					categories.map((item, index) => {
						if (categories.length === index + 1) {
							return (
								<Card
									miw={'32%'}
									mih={170}
									shadow='sm'
									key={item.name + index}
									ref={lastNodeRef}>
									{item?.image && (
										<Card.Section>
											<Image
												src={item.image}
												height={110}
											/>
										</Card.Section>
									)}
									<Text my={10} weight={500}>
										{item.name}
									</Text>
								</Card>
							)
						}

						return (
							<Card
								miw={'32%'}
								mih={170}
								shadow='sm'
								key={item.name + index}>
								{item?.image && (
									<Card.Section>
										<Image src={item.image} height={110} />
									</Card.Section>
								)}
								<Text my={10} weight={500}>
									{item.name}
								</Text>
							</Card>
						)
					})}
			</Flex>

			{loading && <Loader />}
		</>
	)
}
