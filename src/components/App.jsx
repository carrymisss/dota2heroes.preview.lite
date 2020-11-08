import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HeroesPins from '../containers/HeroesPins'
import HeroPage from '../containers/HeroPage'
import Loader from '../components/Loader'
import axios from 'axios'
import Animate from 'rc-animate'


class App extends React.Component {
	componentDidMount() {
		const { setHeroes, setIsReady } = this.props
		axios.get('/heroes.json').then(({ data }) => {
			setHeroes(data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
			setIsReady()
		})
	}

	render () {
		const { isReady } = this.props
		return (
			<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Animate transitionName="fade">
							{ !isReady && <Loader key="1" /> }
	            	</Animate>
						<Animate transitionName="fade">
							{ isReady && <HeroesPins key="2" /> }
						</Animate>
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
