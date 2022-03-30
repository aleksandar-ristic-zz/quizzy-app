import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/data-context'

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route
					path='/*'
					element={
						<AppProvider>
							<App />
						</AppProvider>
					}
				/>
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)
