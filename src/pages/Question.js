import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../context/data-context'
import { Loader } from '../components/Loader'
import { Answers } from '../components'

export const Question = () => {
	const [countdown, setCountdown] = useState(60)
	const { loading, questions } = useAppContext()
	const { i } = useParams()
	const index = parseInt(i)

	const navigate = useNavigate()

	useEffect(() => {
		if (countdown !== 0) {
			const timer = setInterval(() => {
				setCountdown(countdown - 1)
			}, 1000)
			return () => clearInterval(timer)
		}
		if (countdown === 0) {
			console.log('time is up')
			if (index + 1 === questions.length) {
				navigate('/finish')
			} else {
				navigate(`/question/${index + 1}`)
				setCountdown(60)
			}
		}
	}, [countdown])

	if (loading) {
		return <Loader />
	}

	const { category, question } = questions[index]

	return (
		<>
			<header>
				<h3 className='question__no'>
					<span>{index + 1}</span>/{questions.length}
				</h3>
				<h2>{category}</h2>
			</header>
			<main
				className='question'
				style={{ backgroundImage: 'url(/img/bg.png)' }}
			>
				<section className='question__upper'>
					<div className='question__upper__countdown'>
						<span>{countdown}</span>
						<div
							className='question__upper__countdown__inner'
							style={{ width: `${(countdown / 60) * 100}%` }}
						></div>
					</div>
				</section>
				<section className='question__lower'>
					<h2
						className='question__lower__q'
						dangerouslySetInnerHTML={{ __html: question }}
					/>
					<Answers {...questions[index]} />
				</section>
				{index + 1 === questions.length - 1 ? (
					<Link to='/finish' className='btn btn__next'>
						Finish
					</Link>
				) : (
					<Link
						to={`/question/${index + 1}`}
						className='btn btn__next'
						onClick={() => setCountdown(60)}
					>
						Next
					</Link>
				)}
			</main>
		</>
	)
}
