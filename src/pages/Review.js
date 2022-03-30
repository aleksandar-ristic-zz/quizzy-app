import React from 'react'

export const Review = () => {
	return (
		<>
			<header>
				<button className='btn btn__nav'>
					<i className='fa-solid fa-ellipsis-vertical'></i>
				</button>
				<h2>Review</h2>
			</header>
			<main className='review'>
				<h2>Your answers:</h2>
				<section className='review__cards'>
					<div className='review__card'>
						<div>
							<div className='review__card__no'>1.</div>
							<div className='review__card__question'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
								minima commodi reiciendis explicabo omnis laboriosam?
							</div>
						</div>
						<div>
							<div className='review__card__answer'>Lorem, ipsum.</div>
							<div className='review__card__user correct'>Correct.</div>
						</div>
					</div>
					<div className='review__card'>
						<div>
							<div className='review__card__no'>2.</div>
							<div className='review__card__question'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
								minima commodi reiciendis explicabo omnis laboriosam?
							</div>
						</div>
						<div>
							<div className='review__card__answer'>Lorem, ipsum.</div>
							<div className='review__card__user wrong'>Wrong.</div>
						</div>
					</div>
					<div className='review__card'>
						<div>
							<div className='review__card__no'>3.</div>
							<div className='review__card__question'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
								minima commodi reiciendis explicabo omnis laboriosam?
							</div>
						</div>
						<div>
							<div className='review__card__answer'>Lorem, ipsum.</div>
							<div className='review__card__user correct'>Correct.</div>
						</div>
					</div>
				</section>
				<nav className='review__options'>
					<button className='btn'>
						<i className='fa-solid fa-arrow-rotate-left'></i> Retake
					</button>
					<button className='btn'>
						<i className='fa-solid fa-users'></i> Score
					</button>
					<button className='btn'>
						<i className='fa-solid fa-house-chimney'></i> Home
					</button>
				</nav>
			</main>
		</>
	)
}
