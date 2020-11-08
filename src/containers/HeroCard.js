import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import * as heroesActions from '../actions/heroes'
import HeroCard from '../components/HeroCard'

const mapStateToProps = ({ filters }) => ({
   strengthPicked: filters.isPickedStrength,
   agilityPicked: filters.isPickedAgility,
   intelligencePicked: filters.isPickedIntelligence,
   oneComplexity: filters.isPickedOneComplexity,
   twoComplexity: filters.isPickedTwoComplexity,
   threeComplexity: filters.isPickedThreeComplexity,
   supportsPicked: filters.isPickedSupport,
	carriesPicked: filters.isPickedCarry,
})

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(heroesActions, dispatch),
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  null
)(HeroCard)
