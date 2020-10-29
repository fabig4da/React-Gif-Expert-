import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp= ()=>{
  const [categries, setCategories]=useState(['Funny'])
  return (
    <>
    <header>
      <h2 className="title">Gif Expert App</h2>
      < AddCategory setCategories={setCategories}/>
    </header>
      
      
      <ol>
      
        {
          categries.map(category=>{
            return(
            <GifGrid key= {category} category={category} />
            )
          })
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
