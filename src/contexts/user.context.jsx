//user.context.jsx

import { 
    createContext, 
    useState, 
    useEffect
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


//User context values provider for children
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
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