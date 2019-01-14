import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from "./Book";
import {ClipLoader} from 'react-spinners';
import ImageNotFound from '../images/no-image.png'
import {
    Card, CardImg, CardTitle, CardDeck,
    CardSubtitle, CardBody, CardFooter,
} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

class Books extends Component {

    render() {
        const {isLoading, listBooks, onChangeShelf} = this.props;
        return (
            <div>
                {(isLoading === true) &&
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
                    <CardDeck>
                        {
                            listBooks.map((book) => (
                                <Card>
                                    <CardImg top width="100%"
                                             src={book.imageLinks ? book.imageLinks.smallThumbnail : ImageNotFound}
                                             alt={book.alt}/>
                                    <CardBody>
                                        <CardTitle>{book.title}</CardTitle>
                                        <CardSubtitle
                                            className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown author'}</CardSubtitle>
                                        <Book book={book} onChangeShelf={onChangeShelf}/>
                                    </CardBody>
                                    <CardFooter>
                                        <h6>Average Rating</h6>
                                        <StarRatingComponent
                                            name="Average Rating"
                                            starCount={5}
                                            value={book.averageRating}
                                        />
                                    </CardFooter>
                                </Card>

                            ))
                        }
                    </CardDeck>

                }

            </div>
        );
    }
}
Books.propTypes = {
    listBooks: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};


export default Books;
