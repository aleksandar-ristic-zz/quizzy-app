import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useAppContext } from '../context/data-context'

export const Answers = ({ incorrect_answers, correct_answer, index }) => {
	const [answers, setAnswers] = useState([])
	const [active, setActive] = useState('')

	const { handleAnswers } = useAppContext()

	const handleClick = answer => {
		setActive(answer)
		handleAnswers(index, answer)
	}

	useEffect(() => {
		setAnswers(
			[...incorrect_answers, correct_answer].sort(() => Math.random() - 0.5)
		)
	}, [incorrect_answers, correct_answer])

	return (
		<div className='question__lower__answers'>
			{answers.map((answer, index) => {
				return (
					<button
						key={index}
						onClick={() => handleClick(answer)}
						className={`btn__question ${answer === active ? 'active' : ''}`}
					>
						<span>{index + 1}</span>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
						<div className='check'>
							{answer === active ? <BsPatchCheckFill /> : ''}
						</div>
					</button>
				)
			})}
		</div>
	)
}
