import React,  { useEffect, useState } from 'react';

const GoogleAuth = () => {

    const [ isSignedIn, setIsSignedIn ] = useState(null);

    useEffect(() => {
        window.gapi.load('client:auth2', () => { //Attach something to listen for, for completion
            window.gapi.client.init({//Returns an object after loading complete
                clientId: '859673611388-n2q2493ss7rqupg43bpf50bldkdeubf3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                const auth = window.gapi.auth2.getAuthInstance(); //Assigns var to user instance
                setIsSignedIn(auth.isSignedIn.get()); //Assigning User's signin status to local state.
            });
        });
    },);

    const renderAuthButton = () => {

        console.log(isSignedIn);

        if (isSignedIn === null) {
            return <div>null</div>;
        } else if (isSignedIn) {
            return <div>Signed in</div>;
        } else {
            return <div>sign in is false</div>
        }
    }

    return (
        <div>
            {renderAuthButton()}
        </div>
    )
}

export default GoogleAuth;