import { useState, useEffect, createContext, useContext } from 'react'
import { useFetch } from '../hooks/use-fetch'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
	const { loading, questions, fetchQuestions } = useFetch()

	const getQuestions = async params => {
		await fetchQuestions(params)
	}

	return (
		<AppContext.Provider value={{ loading, questions, getQuestions }}>
			{children}
		</AppContext.Provider>
	)
}

export const useAppContext = () => {
	return useContext(AppContext)
}
