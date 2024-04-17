import MovieCard from "./MovieCard";
function FavoriteMovies(){
    const movies = [
        {
            tytle :"Underground",
            duration : "2h 50min",
            type : "comedy",
            year : "1995."
        },
        {
            tytle :"Black cat,white cat",
            duration : "2h 7min",
            type : "comedy",
            year : "1998." 
        }
    ]
    return (
         <div className="movies">
             <h3>Favorite movies</h3>
            {movies.map((movie,index)=>(
                <MovieCard data={movie} key={index}/>
            ))}
         </div>
    );
}
export default FavoriteMovies;