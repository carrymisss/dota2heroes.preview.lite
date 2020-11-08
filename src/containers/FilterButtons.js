import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filtersActions from '../actions/filters'
import FilterButtons from '../components/FilterButtons'

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

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(filtersActions, dispatch),
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(FilterButtons)
