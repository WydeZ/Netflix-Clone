import React from 'react'

export const Nav = () => {
        return (
            <div className='nav'>

                <div className='nav_right'>
                    <img className='nav_logo' src={require('../img/logo.png')}></img>
                    <div className='nav_tags'>
                        <h3 className='nav_tag'>Home</h3>
                        <h3 className='nav_tag'>TV Shows</h3>
                        <h3 className='nav_tag'>Movies</h3>
                        <h3 className='nav_tag'>New & Popular</h3>
                        <h3 className='nav_tag'>My List</h3>
                    </div>
                </div>

                <div className='nav_left'>
                    <i className="material-icons">search</i>
                    <h3 className='nav_left-kids'>Kids</h3>
                    <i className="material-icons">notifications</i>
                    <img className='nav_profile' src={require('../img/profile.jpg')}></img>
                </div>

            </div>
        );
}