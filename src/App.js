import { useAppContext } from './context/data-context'

function App() {
	const { tester } = useAppContext()
	return (
		<main>
			<h1 className='offscreen'>
				Quizzy App. The best quiz app that will test your whole knowledge.
			</h1>
			{tester}
		</main>
	)
}

export default App
