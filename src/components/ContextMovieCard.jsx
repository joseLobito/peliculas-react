import { useEffect, useState } from "react";
import {get} from "../data/HttpClient"
import { MovieCard } from "./MovieCard";
import "../components/ContextMovieCard.css"

export const ContextMovieCard = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        get("/discover/movie").then((data)=>{
            setMovies(data.results)
            console.log(data.results)
        })
    },[])
    return (
        <div>
            <ul className="container">
            {movies.map((movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
            </ul>
        </div>
    );
};

