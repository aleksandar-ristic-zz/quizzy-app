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
		}

		setLoading(false)
	}

	useEffect(() => {
		fetchCategory()
	}, [])

	return { loading, category }
}
