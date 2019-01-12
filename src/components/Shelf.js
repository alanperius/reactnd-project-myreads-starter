import React, {Component} from 'react';
import Books from "./Books";
import PropTypes from 'prop-types';

class Shelf extends Component {

    render() {
        const {isLoading} = this.props;
        console.log('aaaaaaaa = '+isLoading);
        const booksByCategory = this.props.books.filter((b) => (
            b.shelf === this.props.shelf.id
        ))
        return (
            <div key={this.props.shelf.id}>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <Books listBooks={booksByCategory} onChangeShelf={this.props.onChangeShelf} isLoading={isLoading}/>
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
}

export default Shelf;
