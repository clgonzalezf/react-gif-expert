import { useState } from "react";
import { AddCategory, AddCategory2, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Megaman' ]);

    const onAddCategory2 = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories( cat => [ newCategory, ...categories ]);
    }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory2 onNewCategory={onAddCategory2}></AddCategory2>
            { 
                categories.map((category, index) => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    );
};