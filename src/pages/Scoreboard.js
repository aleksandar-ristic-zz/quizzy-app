import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { HiUserGroup } from 'react-icons/hi'
import { BsHouseDoorFill } from 'react-icons/bs'
import { IoMdOptions } from 'react-icons/io'
import { ScoreCard } from '../components'

export const Scoreboard = () => {
	const [show, setShow] = useState(false)
	const [score, setScore] = useState(
		JSON.parse(localStorage.getItem('score')) || []
	)

	useEffect(() => {
		if (score.length > 1) {
			score.sort((a, b) => b.score - a.score)
		}
		if (score.length > 30) {
			setScore(score.slice(0, 30))
			localStorage.setItem('score', JSON.stringify(score.slice(0, 30)))
		}
	}, [score])

	return (
		<>
			<header>
				<button className='btn btn__nav' onClick={() => setShow(prev => !prev)}>
					<IoMdOptions />
				</button>
				<h2>
					Scoreboard <HiUserGroup />
				</h2>
			</header>
			<main className='score'>
				<h2>All scores:</h2>
				<section className='score__cards'>
					{score.length === 0 ? (
						<h3>No scores at the moment.</h3>
					) : (
						score.map((item, index) => (
							<ScoreCard key={index} {...item} index={index + 1} />
						))
					)}
				</section>
				<section className={`score__options ${show ? 'show' : 'hide'}`}>
					<Link to='/form' className='btn'>
						<TiArrowBack /> Play Again
					</Link>
					<Link to='/' className='btn'>
						<BsHouseDoorFill /> Home
					</Link>
				</section>
			</main>
		</>
	)
}
