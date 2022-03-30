import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<>
			<header>
				<img className='logo' src='/img/logo-quiz.svg' alt='quizzy logo' />
				<h2>Quizzy App</h2>
			</header>
			<main className='start'>
				<section className='start__totalNo'>
					<div className='start__totalNo__questionCount'>
						<p>Total questions</p>
						<h3>4068</h3>
					</div>
					<div className='start__totalNo__line'></div>
					<div className='start__totalNo__categoriesCount'>
						<p>Categories</p>
						<h3>9</h3>
					</div>
				</section>
				<section
					className='start__optionsBase'
					style={{ backgroundImage: 'url(/img/questionmark.png)' }}
				>
					<Link to='/form' className='btn'>
						New Game
					</Link>
					<Link to='/score' className='btn'>
						Scoreboard
					</Link>
					<Link to='/about' className='btn'>
						About Us
					</Link>
				</section>
			</main>
		</>
	)
}
