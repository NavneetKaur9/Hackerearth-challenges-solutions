import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar fixed-top navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1"><i className="fas fa-camera-retro"></i> Insta - Image sharing</span>
            </nav>
        )
    }
}

export default Header;