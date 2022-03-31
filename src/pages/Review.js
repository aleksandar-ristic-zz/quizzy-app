import { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { HiUserGroup } from 'react-icons/hi'
import { FaScroll } from 'react-icons/fa'
import { BsHouseDoorFill } from 'react-icons/bs'
import { IoMdOptions } from 'react-icons/io'
import { useAppContext } from '../context/data-context'
import { ReviewCard } from '../components'

export const Review = () => {
	const [show, setShow] = useState(false)
	const { reviewAnswers } = useAppContext()
	return (
		<>
			<header>
				<button className='btn btn__nav' onClick={() => setShow(prev => !prev)}>
					<IoMdOptions />
				</button>
				<h2>
					Review <FaScroll />
				</h2>
			</header>
			<main className='review'>
				<h2>Your answers:</h2>
				<section className='review__cards'>
					{reviewAnswers.map((answer, index) => (
						<ReviewCard key={index} {...answer} index={index + 1} />
					))}
				</section>
				<nav className={`review__options ${show ? 'show' : 'hide'} `}>
					<Link to='/form' className='btn'>
						<TiArrowBack /> Retake
					</Link>
					<Link to='/scoreboard' className='btn'>
						<HiUserGroup /> Score
					</Link>
					<Link to='/' className='btn'>
						<BsHouseDoorFill /> Home
					</Link>
				</nav>
			</main>
		</>
	)
}
