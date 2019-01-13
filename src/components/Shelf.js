import React, {Component} from 'react';
import Books from "./Books";
import PropTypes from 'prop-types';

class Shelf extends Component {

    render() {
        const {isLoading, onChangeShelf, books, shelf} = this.props;
        const booksByCategory = books.filter((b) => (
            b.shelf === shelf.id
        ))
        return (
            <div key={shelf.id}>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {(booksByCategory.length > 0) ? (
                                        <Books listBooks={booksByCategory}
                                               onChangeShelf={onChangeShelf}
                                               isLoading={isLoading}/>
                                    ) : (
                                        <p>No books to show.</p>
                                    )}

                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default Shelf;
