const initialState = {
  settingWindow: {
    moduleId: String,
    config: Object,
  },
  updates: [{
    config: Object,
  }],
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      
      return state.updates;
  }
}