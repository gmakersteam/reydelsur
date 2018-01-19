import store from './store';
import firebase from 'firebase';
import {auth, database} from './firebase';

// login-user
export function signUp(fullname, email, pass) {
    console.log('signUp' + fullname + email + pass);
    auth
        .createUserWithEmailAndPassword(email, pass)
        .then(user => {
            let newuser = {
                fullname,
                email
            }
            database
                .ref('users/' + user.uid)
                .set(newuser);

            database
                .ref('users/' + user.uid)
                .on('value', res => {
                    const fullUserInfo = res.val();

                    console.log('full info ', fullUserInfo);
                    store.setState({
                        user: {
                            id: user.uid,
                            email: fullUserInfo.email,
                            fullname: fullUserInfo.fullname,
                        }
                    })
                })

        })

}

export function signOut() {
    auth.signOut();
    store.setState({
        successLogin: false,
        user: {
            id: '',
            email: ''
        }
    });
    console.log('estasSaliendo', store.getState().successLogin)
}

export function signIn(user, pass) {
    auth
        .signInWithEmailAndPassword(user, pass)
        .then(userObj => {
            database
                .ref('users/' + userObj.uid)
                .once('value')
                .then(res => {
                    const fullUserInfo = res.val();
                    store.setState({
                        user: {
                            id: userObj.uid,
                            email: fullUserInfo.email,
                            fullname: fullUserInfo.fullname,
                            password: fullUserInfo.password
                        }
                    })
                    // readAllBoards();
                })
        })
}

export const success = () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log('user', user);
            let usersRef = database
                .ref('users/')
                .child(user.uid);

            store.setState({
                successLogin: true,
                user: {
                    id: user.uid
                }
            });
            console.log('estas-Ingresando', store.getState().successLogin)
            // readAllBoards()
        }
    });
}
success();