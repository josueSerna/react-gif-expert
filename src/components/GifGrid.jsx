import GifItem from "./GifItem";
import useFectchGifs from "../hooks/useFectchGifs";

const GifGrid = ({category}) => {
    
    const { images, isLoading } = useFectchGifs( category )
    console.log({isLoading})

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando......</h2>)
                
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
