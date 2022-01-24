import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Authentication from '../../Firebase/firebaseinit';
import './Login.css'

Authentication()

const provider = new GoogleAuthProvider();

const Login = () => {
    const handleGoogleSignin = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div className='login'>
            <i onClick={handleGoogleSignin} style={{ fontSize: "60px", marginBottom: "15px", color: "orangered", cursor: "pointer" }} className="fab fa-google"></i>
            <br />
            <button onClick={handleGoogleSignin} style={{ backgroundColor: "orangered", border: "1px solid orangered", color: "white" }}>Google Sign in</button>
        </div>
    );
};

export default Login;