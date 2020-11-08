import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as heroesActions from '../actions/heroes'
import App from '../components/App'

const mapStateToProps = ({ heroes }) => ({
   isReady: heroes.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(heroesActions, dispatch),
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)
