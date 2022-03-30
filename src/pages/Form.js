import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { useFetchCategory } from '../hooks/use-fetch-cat'
import { Loader } from '../components'

export const Form = () => {
	const [quiz, setQuiz] = useState({
		amount: 10,
		category: '20',
		difficulty: 'easy'
	})

	const { loading, category } = useFetchCategory()
	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
	}

	const handleChange = ({ target }) => {
		const name = target.name
		const value = target.value

		setQuiz({ ...quiz, [name]: value })
	}

	if (loading) {
		return <Loader />
	}

	return (
		<>
			<header>
				<Link to='/' className='btn btn__back'>
					<MdOutlineKeyboardBackspace />
				</Link>
				<img className='logo' src='/img/logo-quiz.svg' alt='quiz logo' />
			</header>
			<main>
				<form className='form' onSubmit={handleSubmit}>
					<section className='questionNo'>
						<label htmlFor='questionNo'>Number of questions</label>
						<input
							type='number'
							id='questionNo'
							name='amount'
							value={quiz.amount}
							min='10'
							max='50'
							onChange={e => handleChange(e)}
						/>
						<p className='warning'>Must be in the range 10-50</p>
					</section>
					<section className='categories'>
						<label htmlFor='category'>Choose category</label>
						<select
							id='category'
							name='category'
							value={quiz.category}
							onChange={e => handleChange(e)}
						>
							{category.map(cat => (
								<option key={cat.id} value={cat.id}>
									{cat.name}
								</option>
							))}
						</select>
					</section>
					<section className='difficulty'>
						<p>Which questions</p>
						<div>
							<input
								type='radio'
								id='diff-easy'
								name='difficulty'
								value='easy'
								checked={quiz.difficulty === 'easy'}
								onChange={e => handleChange(e)}
							/>
							<label htmlFor='diff-easy'> Easy</label>
						</div>

						<div>
							<input
								type='radio'
								id='diff-medium'
								value='medium'
								name='difficulty'
								checked={quiz.difficulty === 'medium'}
								onChange={e => handleChange(e)}
							/>
							<label htmlFor='diff-medium'> Medium</label>
						</div>

						<div>
							<input
								type='radio'
								id='diff-hard'
								value='hard'
								name='difficulty'
								checked={quiz.difficulty === 'hard'}
								onChange={e => handleChange(e)}
							/>
							<label htmlFor='diff-hard'> Hard</label>
						</div>
					</section>

					<button className='btn btn__form'>Start Game</button>
				</form>
			</main>
		</>
	)
}
