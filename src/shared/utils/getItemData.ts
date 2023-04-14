export function getItemData(item: { [key: string]: any }) {
	const keys = Object.keys(item).filter(
		(key) =>
			!['id', 'name', 'image', 'created', 'url'].includes(key) &&
			item[key] &&
			typeof item[key] !== 'object',
	)

	return keys.map((key) => ({ key, value: item[key] }))
}
