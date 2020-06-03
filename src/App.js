import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false }); // movies == movies:movies
  };
  componentDidMount() {
    this.getMovies();
  }
  // 마운트가 업데이트될때
  componentDidUpdate() {
    console.log("I just updated - componentDidupdate");
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Now loading..</span>
          </div>
        ) : (
          <div class="movies w-full container items-center p-4">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  rating={movie.rating}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
