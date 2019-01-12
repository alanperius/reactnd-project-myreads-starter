import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Book extends Component {

    handleNewShelf = (event, shelf, book) => {
        event.preventDefault();
        console.log(shelf);
        this.props.onChangeShelf(book, shelf);
    }

    render() {
        const {book} = this.props;
        return (
            <div>
                <div className="book-shelf-changer">
                    <select onChange={event => this.handleNewShelf(event, event.target.value, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option selected={book.shelf === 'currentlyReading'} value="currentlyReading">Currently
                            Reading
                        </option>
                        <option selected={book.shelf === 'wantToRead'} value="wantToRead">Want to Read</option>
                        <option selected={book.shelf === 'read'} value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>


            </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
};

export default Book;
