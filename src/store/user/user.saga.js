import { takeLatest, put, call, all } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user.types';

import { 
    signInSuccess, 
    signInFailed, 
    signUpSuccess,
    signUpFailed,
    signOutFailed,
    signOutSuccess, 
} from './user.action';

import { 
    getCurrentUser, 
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signInAuthUserWithEmaiAndPassword,
    createAuthUserWithEmailAndPassword, 
    signOutUser
} from '../../utils/firebase/firebase.utils'; 


export function* getSnapShotfromUserAuth(userAuth, additionalDetails) {
    try{
        const userSnapShot = yield call(
            createUserDocumentFromAuth, 
            userAuth, 
            additionalDetails
        );
        yield put(signInSuccess( {id: userSnapShot.id, ...userSnapShot.data()} ))
    }catch(error){
        yield put(signInFailed(error)); 
    }
}

export function* isUserAuthenticated() {
    try{
        const userAuth = yield call(getCurrentUser); 
        if (!userAuth) return; 
        yield call(getSnapShotfromUserAuth, userAuth); 
    }catch(error){
        yield put(signInFailed(error)); 
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup); 
        yield call(getSnapShotfromUserAuth, user); 
    }catch(error){
        yield put(signInFailed(error)); 
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield call(
            signInAuthUserWithEmaiAndPassword, 
            email, 
            password
        ); 
        yield call(getSnapShotfromUserAuth, user); 
    } catch(error) {
        yield put(signInFailed(error)); 
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield call(
            createAuthUserWithEmailAndPassword, 
            email, 
            password 
        );
        yield put(signUpSuccess(user, {displayName}))
    } catch(error) {
        yield put(signUpFailed(error)); 
    }

}

export function* signInAfterSignUp({ payload: { user, additionalDetails }}) {
    yield call(getSnapShotfromUserAuth, user, additionalDetails)
}

export function* userSignOut() {
    yield call(signOutUser);
}

export function* signOut() {
    try {
        yield call(signOutUser); 
        yield put(signOutSuccess()); 
    } catch (error) {
        yield put(signOutFailed(error)); 
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail); 
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp); 
}

export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp )
}

// export function* onSignOut() {
//     yield takeLatest(USER_ACTION_TYPES.SIGN_OUT, userSignOut)
// }

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut); 
}


export function* userSagas() {
    yield all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onSignUpStart), 
        call(onSignUpSuccess), 
        // call(onSignOut), 
        call(onSignOutStart), 
    ]); 
}; 