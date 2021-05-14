import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifRead = ( {category} ) => {

    const {data:images, loading} =  useFetchGifs( category );
    return (
        <>
            <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3>
            { loading ? <p className="animate__animated animate__flash">Loading</p> : null}
            <div className="cardRead">
                    {
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id } 
                                { ...img }
                            />)
                        )
                    }
            </div>
        </>
    )
}

export default GifRead
