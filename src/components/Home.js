import React, {Component} from 'react';
import Shelf from "./Shelf";
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom';
import Search from "./Search";

class Home extends Component {

    state = {
        shelf: [
            {title: 'Currently Reading', id: 'currentlyReading'},
            {title: 'Want to Read', id: 'wantToRead'},
            {title: 'Read', id: 'read'}
        ],
        books: [],
        loading: true,
        loadingSearch: false,
        query: '',
        searchResults: [],
    }

    changeShelf = (book, shelf) => {
        this.setState({loading: true,});
        this.updateBook(book, shelf);
    }

    async updateBook(book, shelf) {
        const data = await BooksAPI.update(book, shelf);
        //when is true, update the shelf
        if (data === true) {
            this.search();
        }
    }

    searchBook = (query) => {
        if (query !== '') {
            this.setState({
                loadingSearch: true,
                searchResults: [],
                query: query
            });


            if(this.find) clearTimeout(this.find);
            this.find = setTimeout(() => {
                BooksAPI.search(this.state.query).then((data) => {
                    if (data.length > 0) {

                        const bookMatched = data.map((book) => {
                            book.shelf = 'none';
                            this.state.books.map((b) => {
                                if(book.id === b.id){
                                    book.shelf = b.shelf
                                }
                            })
                            return book;
                        })

                        this.setState({
                            searchResults: bookMatched,
                            loadingSearch: false,
                            query: ''
                        });
                    }

                })
            }, 1500);

        }
    }

        componentDidMount(){
            this.search();
        }

        search(){
            BooksAPI.getAll().then((books) => {
                this.setState(() => ({
                        loading: false,
                        books: books,
                    })
                )
            })
        }

        render()
        {
            const {books, shelf, loading, loadingSearch, searchResults} = this.state;
            return (
                <div className="app">
                    <Route path="/" exact={true} render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads Project</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    {shelf.map((s) => {
                                        return <div key={s.id}> <Shelf books={books}
                                                                       shelf={s}
                                                                       onChangeShelf={this.changeShelf}
                                                                       isLoading={loading}/></div>
                                    })}
                                </div>
                            </div>
                            <div className="open-search">
                                <Link to='/search'>Add a book</Link>
                            </div>
                        </div>
                    )}/>
                    <Route path="/search" render={() => (
                        <Search loadingSearch={loadingSearch}
                                onChangeShelf={this.changeShelf}
                                onSearchBook={this.searchBook}
                                searchResults={searchResults}/>
                    )}/>

                </div>
            );
        }
    }

    export default Home;
