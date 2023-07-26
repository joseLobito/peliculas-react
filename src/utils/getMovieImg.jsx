import placeholder from "../img/placeholder.png"

export const getMovieImg = (path, width) => {
    return (
        path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder
    )
}

