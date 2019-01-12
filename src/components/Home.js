import React, {Component} from 'react';
import Shelf from "./Shelf";
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'

class Home extends Component {

    state = {
        shelf: [
            {title: 'Currently Reading', id: 'currentlyReading'},
            {title: 'Want to Read', id: 'wantToRead'},
            {title: 'Read', id: 'read'}
        ],
        books: [],
        loading: false,
        query: '',
        searchResults: [],
    }

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then((data) => {

        });
        this.search();
    }

    componentDidMount() {
        this.search();
    }

    search() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                    books: books,
                })
            )
        })
    }

    render() {
        const {books, shelf, loading} = this.state;

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads Project</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {shelf.map((s) => {
                                return <Shelf books={books} shelf={s} onChangeShelf={this.changeShelf}
                                              isLoading={loading}/>
                            })}
                        </div>
                    </div>
                    <div className="open-search">
                            <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        );
    }
}
                export default Home;
