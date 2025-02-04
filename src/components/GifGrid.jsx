import { useState, useEffect } from "react";
import { GifItem } from "./../components/GifItem";
import { useFetchGifs } from "./../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs(category);  

  return (
    <>
    <h4>{ category }</h4>
    {
      isLoading && ( <h5>Cargando...</h5> )
    }
    <div className="card-grid">
        {
          images.map((image) => (
            <GifItem key={image.id} { ...image }/>
          ))
        }
    </div>
    </>
  )
}
