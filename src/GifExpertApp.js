import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifRead from './components/GifRead';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['OnePunch']);
    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map( category => ( 
                            <GifRead key={category} category={category}/>
                        )
                    )
                }
            </ol>
            
        </>
    )
}

export default GifExpertApp
