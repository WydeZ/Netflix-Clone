import React, { useState, useEffect } from 'react';
import instance from '../axios';
import requests from '../request'


export const Header: React.FC = () => {
    const [ movie, setMovie ] = useState<any>({})

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals)
            const picked = request.data.results[Math.floor(Math.random() * request.data.results.length)]
            setMovie(picked)
            return request
        }
        fetchData();
    }, []);

    function truncate(str: string, n: number) {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }


    const style = {
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`
    }
        return (
            <header className='banner' style={style}>
                <div className='banner_contents'>
                    <h3 className='banner_original-text'><span>NETFLIX</span> ORIGINAL</h3>
                    <h1 className='banner-title'>{movie.name}</h1>
                    <div className='banner-btns'>
                        <button className='banner-play banner-btn'><i className="material-icons">play_arrow</i>Play</button>
                        <button className='banner-mylist banner-btn'><i className="material-icons">add</i>My List</button>
                    </div>
                    <p className='netflix-banner-overview'>{truncate(movie.overview, 150)}</p>
                </div>
            </header>
        );
}


// "backdrop_path":"/5vUux2vNUTqwCzb7tVcH18XnsF.jpg",
//         "first_air_date":"2022-09-21",
//         "genre_ids":[18,80],"id":113988,
//         "name":"Dahmer – Monster: The Jeffrey Dahmer Story",
//         "origin_country":["US"],"original_language":"en",
//         "original_name":"Dahmer – Monster: The Jeffrey Dahmer Story",
//         "overview":"Across more than a decade, 17 teen boys and young men were murdered by convicted killer Jeffrey Dahmer. How did he evade arrest for so long?",
//         "popularity":4202.209,
//         "poster_path":"/f2PVrphK0u81ES256lw3oAZuF3x.jpg",
//         "vote_average":8.3,
//         "vote_count":1118