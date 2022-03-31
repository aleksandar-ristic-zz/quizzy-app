import { Link } from 'react-router-dom'

export const About = () => {
	return (
		<>
			<header>
				<img className='logo' src='/img/logo-quiz.svg' alt='quizzy logo' />
				<h2>About Quizzy</h2>
			</header>
			<main className='start'>
				<section className='start__totalNo'>
					<div className='start__totalNo__questionCount'>
						<p>React JS &</p>
						<h3>Open Trivia DB</h3>
					</div>
					<div className='start__totalNo__line'></div>
					<div className='start__totalNo__categoriesCount'>
						<p>Version</p>
						<h3>0.10</h3>
					</div>
				</section>
				<section
					className='start__optionsBase'
					style={{ backgroundImage: 'url(/img/questionmark.png)' }}
				>
					<Link to='/form' className='btn'>
						New Game
					</Link>
					<Link to='/scoreboard' className='btn'>
						Scoreboard
					</Link>
					<Link to='/' className='btn'>
						Home
					</Link>
				</section>
			</main>
		</>
	)
}
