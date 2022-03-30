import React from 'react'
import { Link } from 'react-router-dom'

export const Question = () => {
	return (
		<>
			<header>
				<h3 className='question__no'>
					<span>5</span>/10
				</h3>
				<h2>Category</h2>
			</header>
			<main
				className='question'
				style={{ backgroundImage: 'url(/img/bg.png)' }}
			>
				<section className='question__upper'>
					<div className='question__upper__countdown'>
						<span>60</span>
						<div className='question__upper__countdown__inner'></div>
					</div>
				</section>
				<section className='question__lower'>
					<h2 className='question__lower__q'>
						Question Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Officiis, similique accusantium? Minus?
					</h2>

					<div className='question__lower__answers'>
						<button className='btn btn__question'>
							<span>A</span> <span>what is it</span>
							<div className='check'>
								<i className='fa-solid fa-check'></i>
							</div>
						</button>
						<button className='btn btn__question'>
							<span>A</span> <span>what is it</span>
							<div className='check'>
								<i className='fa-solid fa-check'></i>
							</div>
						</button>
						<button className='btn btn__question active'>
							<span>A</span> <span>what is it</span>
							<div className='check active'>
								<i className='fa-solid fa-check'></i>
							</div>
						</button>
						<button className='btn btn__question'>
							<span>A</span> <span>what is it</span>
							<div className='check'>
								<i className='fa-solid fa-check'></i>
							</div>
						</button>
					</div>
				</section>
				<Link to={`will finish`} className='btn btn__next'>
					Next
				</Link>
			</main>
		</>
	)
}
