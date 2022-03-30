import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { HiUserGroup } from 'react-icons/hi'
import { FaScroll } from 'react-icons/fa'
import { BsHouseDoorFill, BsPenFill } from 'react-icons/bs'

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
					<input
						type='text'
						maxLength='20'
						autoComplete='off'
						placeholder='Write your name'
					/>
					<button>
						<BsPenFill />
					</button>
				</form>
				<div className='finish__options'>
					<Link to='/form'>
						<TiArrowBack /> Play Again
					</Link>
					<Link to='/scoreboard'>
						<HiUserGroup /> Score
					</Link>
					<Link to='/review'>
						<FaScroll /> Review
					</Link>
					<Link to='/'>
						<BsHouseDoorFill /> Home
					</Link>
				</div>
			</main>
		</>
	)
}
