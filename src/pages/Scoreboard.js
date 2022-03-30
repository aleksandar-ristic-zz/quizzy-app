import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { HiUserGroup } from 'react-icons/hi'
import { BsHouseDoorFill } from 'react-icons/bs'
import { IoMdOptions } from 'react-icons/io'
import { ScoreCard } from '../components'

export const Scoreboard = () => {
	return (
		<>
			<header>
				<button className='btn btn__nav'>
					<IoMdOptions />
				</button>
				<h2>
					Scoreboard <HiUserGroup />
				</h2>
			</header>
			<main className='score'>
				<h2>All scores:</h2>
				<section className='score__cards'>{/* TODO SCORE CARDS */}</section>
				<section className='score__options hide'>
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
