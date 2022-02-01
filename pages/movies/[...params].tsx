import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import { Movie } from "../../model/types";

export default function MovieDetail() {
  const router = useRouter();
  const [movie, setMovie] = useState<Movie>();

  const [title, id] = (router.query.params as string[]) || [];

  console.log(router.query.params);

  useEffect(() => {
    (async function () {
      if (!id) return;

      const response = await (await fetch(`/api/movies/${id}`)).json();

      setMovie(response);
    })();
  }, [id]);

  return (
    <div>
      <SEO title={title} />
      <h1>{title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        alt={title}
      />
    </div>
  );
}

// export async function getServerSideProps(ctx: any) {
//   console.log(ctx);
//   return {};
// }
