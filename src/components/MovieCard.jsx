import { StarFillIcon, StarIcon } from "@primer/octicons-react";

function GetRandomizedRating() {
  var items = [];
  let rating = Math.floor(Math.random() * 5);
  console.log(rating);
  for (let i = 0; i < 5; i++) {
    i <= rating
      ? items.push(<StarFillIcon size={20} fill="#dbeafe" />)
      : items.push(<StarIcon size={20} fill="#dbeafe" />);
  }
  return items;
}

const MovieCard = ({ movie }) => {
  return (
    <div className={"w-1/4  m-5 h-96 drop-shadow-2xl overflow-hidden "}>
      <img className="h-full min-w-full" src={movie.Poster} alt={movie.Title} />
      <div className="absolute bottom-0 bg-indigo-800 bg-opacity-95 w-full flex flex-col text-center p-2">
        <div className="text-xs text-indigo-100 font-InterLight">
          {movie.Year}
        </div>
        <div className="text-lg text-indigo-100 font-InterMedium">
          {movie.Title}
        </div>
        <div className="flex justify-center gap-1">{GetRandomizedRating()}</div>
      </div>
    </div>
  );
};

export default MovieCard;
