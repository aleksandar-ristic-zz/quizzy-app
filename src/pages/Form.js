import React from 'react'

export const Form = () => {
	return (
		<>
			<header>
				<button className='btn btn__back'>
					<i className='fa-solid fa-arrow-left'></i>
				</button>
				<img className='logo' src='/img/logo-quiz.svg' alt='quiz logo' />
			</header>
			<main>
				<form className='form'>
					<section className='questionNo'>
						<label for='questionNo'>Number of questions</label>
						<input type='number' id='questionNo' value='10' min='10' max='50' />
						<p className='warning'>Must be in the range 10-50</p>
					</section>
					<section className='categories'>
						<label for='categories'>Choose category</label>
						<select id='categories'>
							<option value='9'>General Knowledge</option>
							<option value='10'>Entertainment: Books</option>
							<option value='11'>Entertainment: Film</option>
							<option value='12'>Entertainment: Music</option>
							<option value='13'>Entertainment: Musicals &amp; Theatres</option>
							<option value='14'>Entertainment: Television</option>
							<option value='15'>Entertainment: Video Games</option>
							<option value='16'>Entertainment: Board Games</option>
							<option value='17'>Science &amp; Nature</option>
							<option value='18'>Science: Computers</option>
							<option value='19'>Science: Mathematics</option>
							<option value='20'>Mythology</option>
							<option value='21'>Sports</option>
							<option value='22'>Geography</option>
							<option value='23'>History</option>
							<option value='24'>Politics</option>
							<option value='25'>Art</option>
							<option value='26'>Celebrities</option>
							<option value='27'>Animals</option>
							<option value='28'>Vehicles</option>
							<option value='29'>Entertainment: Comics</option>
							<option value='30'>Science: Gadgets</option>
							<option value='31'>
								Entertainment: Japanese Anime &amp; Manga
							</option>
							<option value='32'>
								Entertainment: Cartoon &amp; Animations
							</option>
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
							/>
							<label for='diff-easy'>Easy</label>
						</div>

						<div>
							<input
								type='radio'
								id='diff-medium'
								value='medium'
								name='difficulty'
							/>
							<label for='diff-medium'>Medium</label>
						</div>

						<div>
							<input
								type='radio'
								id='diff-hard'
								value='hard'
								name='difficulty'
							/>
							<label for='diff-hard'>Hard</label>
						</div>
					</section>

					<button className='btn btn__form'>Start Game</button>
				</form>
			</main>
		</>
	)
}
