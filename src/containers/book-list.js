import React, {Component} from 'react'
import { connect } from 'react-redux';

class BookList extends Component{

    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }


    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )     
    }
}

// The purpose of this function is to take the application state as the arg
// and whatever gets returned from here will show up as props
// inside of BookList
function mapStateToProps(state){

    return{
        books: state.books
    }
}

// make use of the connect function at the top
// this is what actually says okay, take this component and take the map 
// state to props and return a container

export default connect(mapStateToProps)(BookList);