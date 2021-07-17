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
        this.setState( { [event.target.name]: event.target.value})
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
                    onChange={event => this.handleSearch(event)}
                />
            <button type="submit">search</button>
            </form>
        );
    }
}
 
export default SearchBar;