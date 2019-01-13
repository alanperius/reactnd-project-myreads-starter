import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Books from "./Books";

class Search extends Component {

    onSearch = (query) =>{
        this.props.onSearchBook(query);
    }

    render() {
        const {searchResults, loadingSearch, onChangeShelf} = this.props;
        return (
            <div>
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link to='/' className='close-search'>Close</Link>
                            <div className="search-books-input-wrapper">
                                <input type="text"
                                       placeholder="Search by title or author"
                                       onChange={(event) => this.onSearch(event.target.value)}/>
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid">
                                <Books listBooks={searchResults} isLoading={loadingSearch} onChangeShelf={onChangeShelf}/>

                            </ol>
                        </div>
                    </div>


            </div>
        );
    }
}

Search.propTypes = {
    searchResults: PropTypes.array.isRequired,
    loadingSearch: PropTypes.bool.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onSearchBook: PropTypes.func.isRequired
};

export default Search;
