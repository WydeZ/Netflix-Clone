import React, { useEffect, useState } from 'react'

export const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        });

        return () => {
            window.removeEventListener('scroll', () => {

            })
        }
    }, [])
        return (
            <div className={`nav ${show && 'nav_black'}`}>

                <div className='nav_right'>
                    <img className='nav_logo' alt='Netflix Logo' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} src={require('../img/logo.png')}></img>
                    <div className='nav_tags'>
                        <h3 className='nav_tag' style={{color: '#fff', fontWeight: '400'}}>Home</h3>
                        <h3 className='nav_tag'>TV Shows</h3>
                        <h3 className='nav_tag'>Movies</h3>
                        <h3 className='nav_tag'>New & Popular</h3>
                        <h3 className='nav_tag'>My List</h3>
                    </div>
                </div>

                <div className='nav_left'>
                    <i className="material-icons nav_left-item">search</i>
                    <h3 className='nav_left-kids nav_left-item'>Kids</h3>
                    <i className="material-icons nav_left-item">notifications</i>
                    <img alt='Netflix Profile' className='nav_profile' src={require('../img/profile.jpg')}></img>
                </div>

            </div>
        );
}