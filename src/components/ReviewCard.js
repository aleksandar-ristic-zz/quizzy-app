import React from 'react'

export const ReviewCard = ({ question }) => {
	return (
		<div className='review__card'>
			<div>
				<div className='review__card__no'>1.</div>
				<div className='review__card__question'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, minima
					commodi reiciendis explicabo omnis laboriosam?
				</div>
			</div>
			<div>
				<div className='review__card__answer'>Lorem, ipsum.</div>
				<div className='review__card__user correct'>Correct.</div>
			</div>
		</div>
	)
}
