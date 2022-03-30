import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = params => {
	const [loading, setLoading] = useState(true)
	const [questions, setQuestions] = useState([])

	const URL = `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`

	const fetchQuestions = async () => {
		setLoading(true)

		const res = await axios(URL).catch(err => console.error(err))

		if (res && res.data) {
			setQuestions(res.data.results)
		}
		setLoading(false)
	}

	useEffect(() => {
		fetchQuestions()
	}, [params])

	return { loading, questions }
}
