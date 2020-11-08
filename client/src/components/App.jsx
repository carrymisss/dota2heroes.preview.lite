import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HeroesPins from '../containers/HeroesPins'
import HeroPage from '../containers/HeroPage'
// import Loader from '../components/Loader'
import Scraping from '../containers/Scraping'
import axios from 'axios'


class App extends React.Component {
	// componentDidMount() {
	// 	const { setHeroes, setIsReady } = this.props
	// 	axios.get('/heroes.json').then(({ data }) => {
	// 		setHeroes(data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
	// 		setIsReady()
	// 	});
	// }

	render () {
		const { isReady } = this.props
		return (
			<>
			<Router>
				<Switch>
					<Route exact path="/">
						{ !isReady ? <Scraping /> : <HeroesPins /> }
					</Route>
					<Route path="/:herourl">
						{ !isReady ? <Redirect to="/" /> : <HeroPage /> }
					</Route>
					<Route path="*">
						<h1>404</h1>
					</Route>
				</Switch>
			</Router>
			</>
		)
	}
}

export default App;
