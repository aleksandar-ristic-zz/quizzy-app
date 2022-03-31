import React from 'react'

export const ScoreCard = ({ index, name, score }) => {
	return (
		<div className='score__card'>
			<div className='score__card__no'>{index}</div>
			<p className='score__card__name'>{name}</p>
			<h3 className='score__card__points'>{score}pt</h3>
		</div>
	)
}
