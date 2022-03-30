import React from 'react'

export const Scoreboard = () => {
	return (
		<>
			<header>
				<button className='btn btn__nav'>
					<i className='fa-solid fa-ellipsis-vertical'></i>
				</button>
				<h2>Scoreboard</h2>
			</header>
			<main className='score'>
				<h2>All scores:</h2>
				<section className='score__cards'>
					<div className='score__card'>
						<div className='score__card__no'>1</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>2</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>3</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
					<div className='score__card'>
						<div className='score__card__no'>4</div>
						<p className='score__card__name'>Rick</p>
						<h3 className='score__card__points'>150pt</h3>
					</div>
				</section>
				<section className='score__options show'>
					<button className='btn'>
						<i className='fa-solid fa-arrow-rotate-left'></i> Play Again
					</button>
					<button className='btn'>
						<i className='fa-solid fa-house-chimney'></i> Home
					</button>
				</section>
			</main>
		</>
	)
}
