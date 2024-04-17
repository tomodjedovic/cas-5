

function MovieCard({data}:any){
    const {tytle,duration,type,year }= data;

    return(
         
            <div className="movie">
                <span> title : {tytle}</span>
                <span> duration : {duration}</span>
                <span> type : {type}</span>
                <span> year : {year}</span>

            </div>
        

    )
}

export default MovieCard;