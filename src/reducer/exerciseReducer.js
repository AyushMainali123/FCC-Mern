export const initialState = []


const exerciseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXERCISE':
            const id = action.payload.exercise.id
            const isInArray = state.some(data => data.id === id)
            if (isInArray) {
                return state;
            }
            return [...state, action.payload.exercise]
        case 'DELETE_EXERCISE':
            return state.filter(_ => _.id !== action.payload.id)
        case 'UPDATE_EXERCISE':
            return state.map(_ => _.id === action.payload.id ? action.payload.exercise : _)
    }
}


export default exerciseReducer