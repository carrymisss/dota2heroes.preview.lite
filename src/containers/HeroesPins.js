import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as heroesActions from '../actions/heroes'
import HeroesPins from '../components/HeroesPins'

const mapStateToProps = ({ heroes }) => ({
	heroes: heroes.items,
	isReady: heroes.isReady
})

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(heroesActions, dispatch),
// })

export default connect(
	mapStateToProps,
	// mapDispatchToProps,
	null
)(HeroesPins)
