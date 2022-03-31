import { useState } from 'react'
import axios from 'axios'

export const useFetch = () => {
	const [loading, setLoading] = useState(true)
	const [questions, setQuestions] = useState([])

	const fetchQuestions = async params => {
		const URL = `https://opentdb.com/api.php?amount=${params.amount}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`

		setLoading(true)

		const res = await axios(URL).catch(err => console.error(err))

		if (res && res.data) {
			setQuestions(res.data.results)
		}
		setLoading(false)
	}

	return { loading, questions, fetchQuestions }
}
