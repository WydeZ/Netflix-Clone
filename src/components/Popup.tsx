import React from 'react'
import YouTube from 'react-youtube';

interface PopupProps {
    popup: any,
    setPopup:  React.Dispatch<React.SetStateAction<any>>
}

export const Popup: React.FC<PopupProps> = ({popup, setPopup}) => {
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
      }
        return (
        <div className='popup_container'>
            <div className='popup'>
            {/* <YouTube opts={opts}/> */}
            <button className='popup_close' onClick={() => setPopup(false)}>x</button>
                <div className='popup_content'>
                <div className='popup_content-tags'>
                    <h5 className='popup_content-match'>{popup.vote_average * 10}% Match</h5>
                    <h5 className='popup_content-date'>{popup.first_air_date}</h5>
                    <i className="material-icons popup_content-hd">hd</i>
                    <i className="material-icons popup_content-4k">4k</i>
                </div>
                <p className='popup_overview'>{popup.overview}</p>
            </div>
            </div>
        </div>
        );
}