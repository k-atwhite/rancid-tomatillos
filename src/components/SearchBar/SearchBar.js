import React, { Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        }
    }

    handleSearch = event => {
        event.preventDefault();
        this.setState( { [event.target.name]: event.target.value})
        this.props.filterMovies(this.state.searchValue)
    }

    clearSearch = event => {
        this.setState( {searchValue: ''})
    }

    render() { 
        return (
            <form>
                <input
                    type="search"
                    id="movie-search"
                    placeholder="search movies"
                    name="searchValue"
                    value={this.state.searchValue}
                    onChange={event => this.handleSearch(event)}
                    onFocus={event => this.clearSearch(event)}
                />
            </form>
        );
    }
}
 
export default SearchBar;