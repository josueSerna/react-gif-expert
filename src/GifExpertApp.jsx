import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories])
    }

  return (
    <>
        <h1>GifExpert</h1>

        <AddCategory 
            onNewCategory={ event => onAddCategory(event) }
        />

            {categories.map(
                category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                )
            )}
    </>
  )
}

export default GifExpertApp
