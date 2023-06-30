//user.context.jsx

import { 
    createContext, 
    useState, 
    useEffect, 
    useReducer, 
} from 'react';

import { 
    onAuthStateChangedListener,
	createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils.js';


//User context declaration
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

//Reducer function for user context 
const userReducer = (state, action) => {
    console.log('dispatch'); 
    console.log(action); 
    const {type, payload} = action; 

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
            return{
                currentUser: payload
            }

        default: 
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
    
} 

const INITIAL_STATE = {
    currentUser: null
}

//User context values provider for children
export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE) 
    
    const {currentUser} = state; 
    console.log(currentUser);
    const setCurrentUser = (user) => {
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER, 
            // type: 'NOT_HANDLED', 
            payload: user, 
        });
    }

	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user)=> {
			if(user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		})

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>
		{ children }
	</UserContext.Provider>
}; 