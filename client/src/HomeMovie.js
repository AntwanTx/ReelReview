import avengers from "./movie-posters/avengers.jpg";

export default function HomeMovie(){
    return(
    <div className="film avengers">
        <img src={avengers} alt="Poster for Avengers."></img>
        <h3>Avengers</h3>
     </div>
    );
}