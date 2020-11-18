import React, { Component } from "react";
import {toast} from 'react-toastify'
import { getMovies } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Page from "./common/page";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
import _ from "lodash";
import { deleteMovie } from "../services/movieService";
class Movies extends Component {
  state = {
    movie: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };
  async componentDidMount() {
    //const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    const {data}=await getGenres();
    const genres = [{ _id: "", name: "All Genres" }, ...data]
    const {data:movie}=await getMovies();
    this.setState({ movie, genres });
  }
  handleDelete = async movie => {
    const originalMovies=this.state.movie
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movie: movies });
    try{
      await deleteMovie(movie._id);
    }
    catch(ex){
      if(ex.response && ex.response.status===404)
      toast.error('This movie has already been deleted')
      this.setState({movies:originalMovies})

    }
  };
  handleLike = (movie) => {
    const movies = [...this.state.movie];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movie: movies });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movie: allMovies,
    } = this.state;
    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { length: count } = this.state.movie; //destructuring length
    const {user}=this.props;
    if (count === 0) return <p>There are no movies in the database.</p>;
    const { totalCount, data: movies } = this.getPagedData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          {user&&(<Link
            style={{ marginBottom: "30px" }}
            to="/movies/new"
            className="btn btn-primary"
          >
            New Movie
          </Link>)}
          <br></br>
          <p>Showing {totalCount} movies in the database.</p>
          <SearchBox
            value={searchQuery}
            onChange={this.handleSearch}
          />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Page
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          ></Page>
        </div>
      </div>
    );
  }
}

export default Movies;
