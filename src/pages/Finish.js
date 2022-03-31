import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { HiUserGroup } from 'react-icons/hi'
import { FaScroll } from 'react-icons/fa'
import { BsHouseDoorFill, BsPenFill } from 'react-icons/bs'
import { useAppContext } from '../context/data-context'

export const Finish = () => {
	const [name, setName] = useState('')
	const [disabled, setDisabled] = useState(false)
	const [stats, setStats] = useState({ correct: 0, incorrect: 0, total: 0 })
	const { reviewAnswers } = useAppContext()

	const handleSave = e => {
		e.preventDefault()
		const properName = name.trim()
		if (!properName) return

		const storage = localStorage.getItem('score')

		if (storage) {
			const scores = JSON.parse(storage)
			scores.push({
				name: properName,
				score: stats.correct * 10
			})
			localStorage.setItem('score', JSON.stringify(scores))
		} else {
			localStorage.setItem(
				'score',
				JSON.stringify([{ name: properName, score: stats.correct * 10 }])
			)
		}
		setName('')
		setDisabled(true)
	}

	useEffect(() => {
		const newStats = {
			correct: 0,
			incorrect: 0,
			total: 0
		}

		reviewAnswers.forEach(answer => {
			if (answer.correct_answer === answer.your_answer) {
				newStats.correct++
			} else {
				newStats.incorrect++
			}
			newStats.total++
		})

		setStats(newStats)
	}, [reviewAnswers])

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
						<h2>{stats.correct * 10}</h2>
					</div>
				</section>
				<section className='finish__stats'>
					<div className='finish__stats__inner'>
						<h2>{(stats.correct / stats.total) * 100}%</h2>
						<p>Percentage</p>
					</div>
					<div className='finish__stats__inner'>
						<h2>{stats.total}</h2>
						<p>Total</p>
					</div>
					<div className='finish__stats__inner'>
						<h2>{stats.correct}</h2>
						<p>Correct</p>
					</div>
					<div className='finish__stats__inner'>
						<h2>{stats.incorrect}</h2>
						<p>Incorrect</p>
					</div>
				</section>
				<form className='finish__save'>
					<label htmlFor='name'>Save your score</label>
					<input
						type='text'
						maxLength='20'
						autoComplete='off'
						placeholder='Write your name'
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>
					<button onClick={handleSave} disabled={disabled}>
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
