import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
	Home,
	Form,
	Question,
	Review,
	Scoreboard,
	Finish,
	About
} from './pages'

function App() {
	useEffect(() => {
		document.body.style.backgroundImage = 'url(./img/main_bg.png)'
	}, [])
	return (
		<>
			<h1 className='offscreen'>
				Quizzy App. The best quiz app that will test your whole knowledge.
			</h1>
			<Routes>
				<Route index element={<Home />} />
				<Route path='form' element={<Form />} />
				<Route path='/question/:i' element={<Question />} />
				<Route path='review' element={<Review />} />
				<Route path='scoreboard' element={<Scoreboard />} />
				<Route path='finish' element={<Finish />} />
				<Route path='about' element={<About />} />
			</Routes>
		</>
	)
}

export default App
