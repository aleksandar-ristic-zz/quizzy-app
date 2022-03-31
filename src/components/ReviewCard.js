import React from 'react'

export const ReviewCard = ({
	question,
	correct_answer,
	your_answer,
	index
}) => {
	return (
		<div className='review__card'>
			<div>
				<div className='review__card__no'>{index}</div>
				<div className='review__card__question'>{question}</div>
			</div>
			<div>
				<div className='review__card__answer'>{your_answer}</div>
				<div
					className={`review__card__user ${
						your_answer === correct_answer ? 'correct' : 'incorrect'
					}`}
				>
					{your_answer === correct_answer
						? 'Correct'
						: your_answer === 'timeout'
						? 'Timeout'
						: 'Wrong'}
				</div>
			</div>
		</div>
	)
}
