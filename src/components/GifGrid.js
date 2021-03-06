import React from 'react'
import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid=({category})=> {

    const{data:images, loading}= useFetchGifs(category)

    
    
    return (
        <>
            <hr />
            <h3>{category}</h3>
            {loading && 'Cargando...'}
            <div className="card-grid">
                {
                    images.map((img)=>{
                        return(
                        <GifGridItem {...img} key={img.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}

