
export const initialState = {
  username: "",
  description: "",
  duration: 5,
  date: new Date(),
};

export default (state, action) => {
    switch (action.type) {
        case "USERNAME": 
            return {...state, username: action.payload.username}
        case "DESCRIPTION": 
            return {...state, description: action.payload.description}
        case "DURATION": 
            return {...state, duration: action.payload.duration}
        case "DATE": 
            return { ...state, date: action.payload.date }
        default:
            return state
    }
}