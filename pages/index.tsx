import SEO from "../components/SEO";
import { Movie } from "../model/types";

export default function Home({ results: movies }: { results: Movie[] }) {
  // const [movies, setMovies] = useState<Movie[]>();

  return (
    <div>
      <SEO title="Home" />
      <div className="container">
        {movies?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h4>{movie.original_title}</h4>
          </div>
        ))}
        {movies?.length === 0 && <li>No movies found</li>}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          width: 100%;
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 이름이 중요. 서버에서 데이터를 받아온 뒤 클라이언트에게 전달한다.
//이걸 이용하면 next.config.js의 rewrite를 할 필요가 없다.
export async function getServerSideProps() {
  const { results } = await (
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
  ).json();
  return {
    props: {
      results,
    },
  };
}
