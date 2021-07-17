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
        this.setState( {searchValue: event.target.value} )
        this.props.filterMovies(this.state.searchValue)
    }

    clearSearchValue = event => {
        this.setState( {searchValue: ''})
        this.props.clearFilteredMovies()
        console.log("clear filter ran");
    }

    render() { 
        return (
            <form>
                <input
                    type="text"
                    id="movie-search"
                    placeholder="search movies"
                    name="searchValue"
                    value={this.state.searchValue}
                    onInput={event => this.handleSearch(event)}
                    onFocus={event => this.clearSearchValue(event)}
                    
                />
                <i class="fa fa-times" aria-hidden="true" onClick={event => this.clearSearchValue(event)}></i>
            </form>
        );
    }
}
 
export default SearchBar;