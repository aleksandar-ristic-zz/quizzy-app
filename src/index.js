import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/data-context'

ReactDOMClient.createRoot(document.getElementById('root')).render(
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
	</React.StrictMode>
)
