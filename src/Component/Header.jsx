import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {

        logOut()
            .then(result => {

            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <h1 className="normal-case text-xl">DaisyUI</h1>
                <Link to="/" className="btn btn-ghost normal-case">Home</Link>
                <Link to="/login" className="btn btn-ghost normal-case">Log in</Link>
                <Link to="/register" className="btn btn-ghost normal-case">Register</Link>
                <Link to="/order" className="btn btn-ghost normal-case">Order</Link>
                {
                    user && <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost normal-case">sign out</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;