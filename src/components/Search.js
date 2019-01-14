import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Books from "./Books";
import {ClipLoader} from 'react-spinners';

class Search extends Component {

    onSearch = (query) => {
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
                            {searchResults.length > 0 &&
                            <p>We found {searchResults.length} {searchResults.length === 1 ? 'book' : 'books'}</p>}
                            <Books listBooks={searchResults} isLoading={false} onChangeShelf={onChangeShelf}/>

                            {(loadingSearch === true) &&
                            <ClipLoader
                                css="override"
                                sizeUnit={"px"}
                                size={150}
                                color={'#123abc'}
                                loading={loadingSearch}
                            />

                            }
                            {(searchResults.length === 0 && loadingSearch === false) &&
                            <div>No results.</div>
                            }
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
