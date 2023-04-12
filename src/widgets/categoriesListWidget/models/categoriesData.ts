import { Category } from './category'

export interface CategoriesData {
	info: {
		count: number
		next: string | null
		pages: 3
		prev: string | null
	}
	results: Category[]
}
