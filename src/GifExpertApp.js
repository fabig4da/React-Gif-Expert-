import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp= ()=>{
  const [categries, setCategories]=useState(['Simpson'])
  return (
    <>
      <h2>GifExpertApp</h2>
      < AddCategory setCategories={setCategories}/>
      <hr />
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
