import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as heroesActions from '../actions/heroes'
import Scraping from '../components/Scraping'


const mapStateToProps = ({ heroes }) => ({
   heroes: heroes.items,
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(heroesActions, dispatch),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Scraping)
