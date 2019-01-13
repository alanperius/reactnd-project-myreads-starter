import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {ClipLoader} from 'react-spinners';
import ImageNotFound from '../images/no-image.png'


class Books extends Component {

    render() {
        const {isLoading, listBooks, onChangeShelf} = this.props;
        return (
            <div>
                {(isLoading === true)  &&
                    <div className='sweet-loading'>
                        <ClipLoader
                            css="override"
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={isLoading}
                        />
                    </div>
                }
                {
                    listBooks.map((book) => (
                        <div className="book" key={book.id}>
                            <div className="book-top">
                                <div className="book-cover image" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ImageNotFound})`}}></div>
                                <Book book={book} onChangeShelf={onChangeShelf} isLoading={isLoading}/>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors"> {book.authors ? book.authors.join(', ') : 'Unknown author'}</div>
                        </div>
                    ))

                }


            </div>
        );
    }
}



export default Books;
