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


//Reducer function for user context 
const userReducer = (state, action) => {
    const {type, payload} = action; 

    
    return 
} 

//User context values provider for children
export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null);
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