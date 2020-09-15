import React, { useEffect, useState } from 'react';
import GoogleAuth from './GoogleAuth';
import { Link } from 'react-router-dom';

const Header = () => {

    const [ isSignedIn, setIsSignedIn ] = useState(null)

    useEffect(() => {
        window.gapi.load('client:auth2', () => { //Attach something to listen for, for completion
            window.gapi.client.init({//Returns an object after loading complete
                clientId: '859673611388-n2q2493ss7rqupg43bpf50bldkdeubf3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance(); //Assigns var to user instance
                setIsSignedIn(this.auth.isSignedIn.get()); //Assigning User's signin status to local state.
            });
        });
    }, []);

    return (
        <div className='ui secondary pointing menu'>
            <Link to='/' className='item'>
                Streamy
            </Link>
            <div className='right menu'>
                <Link to='/' className='item'>
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;