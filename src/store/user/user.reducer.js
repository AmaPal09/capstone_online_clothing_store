//action types for userReducer
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

//Initial state for user
const INITIAL_STATE = {
    currentUser: null
}

//Reducer function for user context 
export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action; 

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return{
                currentUser: payload
            }
        default: 
            return state; 
    }
    
} 


