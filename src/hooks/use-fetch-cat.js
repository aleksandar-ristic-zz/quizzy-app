import { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://opentdb.com/api_category.php'

export const useFetchCategory = () => {
	const [category, setCategory] = useState([])
	const [loading, setLoading] = useState(true)

	const fetchCategory = async () => {
		setLoading(true)

		const res = await axios(URL).catch(err => console.error(err))

		if (res && res.data) {
			setCategory(res.data.trivia_categories)
			localStorage.setItem(
				'category',
				JSON.stringify(res.data.trivia_categories)
			)
		}

		setLoading(false)
	}

	useEffect(() => {
		const storage = localStorage.getItem('category')
		if (!storage) {
			fetchCategory()
		} else {
			setCategory(JSON.parse(storage))
		}
	}, [])

	return { loading, category }
}
