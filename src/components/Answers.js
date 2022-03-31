import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

export const Answers = ({ incorrect_answers, correct_answer, user_answer }) => {
	const [answers, setAnswers] = useState([])

	const handleClick = answer => {}

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
						className='btn__question'
					>
						<span>{index + 1}</span>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
						<div className={`check ${answer === user_answer && 'active'}`}>
							{answer === user_answer ? <BsPatchCheckFill /> : ''}
						</div>
					</button>
				)
			})}
		</div>
	)
}
