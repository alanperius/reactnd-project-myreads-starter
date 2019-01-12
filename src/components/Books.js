import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {css} from '@emotion/core';
import {ClipLoader} from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
class Books extends Component {

    render() {
        const {isLoading} = this.props;
        return (
            <div>
                {isLoading ? (
                    <div className='sweet-loading'>
                        <ClipLoader
                            css={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={isLoading}
                        />
                    </div>
                ) : (
                    this.props.listBooks.map((book) => (
                        <div className="book" key={book.id}>
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                <Book book={book} onChangeShelf={this.props.onChangeShelf} isLoading={this.props.isLoading}/>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors"> {book.authors ? book.authors.join(', ') : 'Unknown author'}</div>
                        </div>
                    ))

                )}


            </div>
        );
    }
}

Books.propTypes = {
    listBooks: PropTypes.array.isRequired,
};

export default Books;
