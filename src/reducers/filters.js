const initialState = {
	isPickedStrength: false,
	isPickedAgility: false,
   isPickedIntelligence: false,
	isPickedOneComplexity: false,
	isPickedTwoComplexity: false,
   isPickedThreeComplexity: false,
	isPickedSupport: false,
	isPickedCarry: false,
}

export default (state = initialState, action) => {
  	switch (action.type) {
   	case "SET_PICKED_STRENGTH":
	      return {
				...state,
				isPickedStrength: !state.isPickedStrength,
				isPickedAgility: false,
			   isPickedIntelligence: false,
				isPickedOneComplexity: false,
				isPickedTwoComplexity: false,
			   isPickedThreeComplexity: false,
	      }
		case "SET_PICKED_AGILITY":
	      return {
				...state,
				isPickedStrength: false,
				isPickedAgility: !state.isPickedAgility,
			   isPickedIntelligence: false,
				isPickedOneComplexity: false,
				isPickedTwoComplexity: false,
			   isPickedThreeComplexity: false,
	      }
   	case "SET_PICKED_INTELLIGENCE":
	      return {
				...state,
				isPickedStrength: false,
				isPickedAgility: false,
			   isPickedIntelligence: !state.isPickedAgility,
				isPickedOneComplexity: false,
				isPickedTwoComplexity: false,
			   isPickedThreeComplexity: false,
	      }
		case "SET_ONE_COMPLEXITY":
	      return {
				...state,
				isPickedOneComplexity: !state.isPickedOneComplexity,
				isPickedTwoComplexity: false,
			   isPickedThreeComplexity: false,
				isPickedStrength: false,
				isPickedAgility: false,
			   isPickedIntelligence: false,
	      }
		case "SET_TWO_COMPLEXITY":
	      return {
				...state,
				isPickedOneComplexity: false,
				isPickedTwoComplexity: !state.isPickedTwoComplexity,
			   isPickedThreeComplexity: false,
				isPickedStrength: false,
				isPickedAgility: false,
			   isPickedIntelligence: false,
	      }
		case "SET_THREE_COMPLEXITY":
	      return {
				...state,
				isPickedOneComplexity: false,
				isPickedTwoComplexity: false,
			   isPickedThreeComplexity: !state.isPickedThreeComplexity,
				isPickedStrength: false,
				isPickedAgility: false,
			   isPickedIntelligence: false,
	      }
		case "SET_SUPPORT":
	      return {
				...state,
				isPickedSupport: !state.isPickedSupport,
	      }
		case "SET_CARRY":
			return {
				...state,
				isPickedCarry: !state.isPickedCarry,
			}
		default: return state
	}
}
