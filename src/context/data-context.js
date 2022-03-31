import { useState, useEffect, createContext, useContext } from 'react'
import { useFetch } from '../hooks/use-fetch'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const [reviewAnswers, setReviewAnswers] = useState([])
	const { loading, questions, fetchQuestions } = useFetch()

	const getQuestions = async params => {
		await fetchQuestions(params)
	}

	const handleAnswers = (index, your_answer) => {
		let answers = [...reviewAnswers]
		const check = answers.find(answer => answer.id === index)

		if (check) {
			answers[index] = {
				...check,
				your_answer
			}
		} else {
			answers.push({
				question: questions[index].question,
				your_answer,
				correct_answer: questions[index].correct_answer,
				id: index
			})
		}
		setReviewAnswers(answers)
	}
	return (
		<AppContext.Provider
			value={{ loading, questions, reviewAnswers, getQuestions, handleAnswers }}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}
