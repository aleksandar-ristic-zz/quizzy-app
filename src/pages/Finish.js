import React from 'react'

export const Finish = () => {
	return (
		<>
			<header>
				<img className='logo' src='/img/logo-quiz.svg' alt='quizzy logo' />
				<h2>Congrats!</h2>
			</header>

			<main
				className='finish'
				style={{ backgroundImage: 'url(/img/confetti.png)' }}
			>
				<section
					className='finish__scorePoints'
					style={{ backgroundImage: 'url(/img/trophy.png)' }}
				>
					<div className='finish__scorePoints__inner'>
						<p>Your Score</p>
						<h2>150pt</h2>
					</div>
				</section>
				<section className='finish__stats'>
					<div className='finish__stats__inner'>
						<h2>65%</h2>
						<p>Percentage</p>
					</div>
					<div className='finish__stats__inner'>
						<h2>20</h2>
						<p>Total</p>
					</div>
					<div className='finish__stats__inner'>
						<h2>13</h2>
						<p>Correct</p>
					</div>
					<div className='finish__stats__inner'>
						<h2>7</h2>
						<p>Incorrect</p>
					</div>
				</section>
				<form className='finish__save'>
					<label for='name'>Save your score</label>
					<input type='text' autocomplete='off' placeholder='Write your name' />
					<button>
						<i className='fa-solid fa-floppy-disk'></i>
					</button>
				</form>
				<div className='finish__options'>
					<button>
						<i className='fa-solid fa-arrow-rotate-left'></i> Play Again
					</button>
					<button>
						<i className='fa-solid fa-users'></i> Score
					</button>
					<button>
						<i className='fa-solid fa-scroll'></i> Review
					</button>
					<button>
						<i className='fa-solid fa-house-chimney'></i> Home
					</button>
				</div>
			</main>
		</>
	)
}
