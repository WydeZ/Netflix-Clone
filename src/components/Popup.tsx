import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
// @ts-ignore
import movieTrailer from 'movie-trailer'

interface PopupProps {
    popup: any,
    setPopup:  React.Dispatch<React.SetStateAction<any>>
}

export const Popup: React.FC<PopupProps> = ({popup, setPopup}) => {
    const [trailerUrl, setTrailerUrl] = useState('')
    const opts = {
        height: '350',
        width: '100%',
        file: {
            attributes: {
              crossOrigin: 'anonymous',
            },
        },
        playerVars: {
            autoplay: 1,
            origin: window.location.host,  
        }
      }

      useEffect(() => {
        if(popup !== false) {
            if(trailerUrl) {
                setTrailerUrl('')
            } else {
                console.log(movieTrailer('Up'))
                movieTrailer(null ,{ tmdbId: popup.id })
                .then((url: any) => {
                    console.log(url)
                    console.log(popup.id)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v')!)
                }).catch((err: any) => console.log(err))
            }
        }
      }, [popup])

        return (
        <div className='popup_container'>
            <div className='popup'>
            {trailerUrl && <YouTube opts={opts} videoId={trailerUrl}/>}
            <button className='popup_close' onClick={() => setPopup(false)}>x</button>
                <div className='popup_content'>
                <div className='popup_content-tags'>
                    <h5 className='popup_content-match'>{Math.round(popup.vote_average * 10)}% Match</h5>
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