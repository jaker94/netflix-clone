import Image from "next/image";
import { Movie } from "../typings";
import { useState, useEffect } from "react";
import { baseUrl } from "../constants/Movie";

interface Props {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);

  return (
    <div>
      <div className="absolute top-0 left-0 h-[95vh]">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Banner;
