const initialState = {
  isReady: false,
  items: []
}

export default (state = initialState, action) => {
   switch (action.type) {
      case "SET_HEROES":
         return {
            ...state,
            items: [...state.items, action.payload],
            // items: action.payload
            // isReady: true,
         }
      case "SET_IS_READY":
         return {
            ...state,
            isReady: true,
         }
      default: return state
  }
}
