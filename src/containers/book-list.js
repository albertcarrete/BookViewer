import React, {Component} from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'


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

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, result should be passed
    // to all of our reducers.
    return bindActionCreators({ selectBook: selectBook}, dispatch)
}
// make use of the connect function at the top
// this is what actually says okay, take this component and take the map 
// state to props and return a container

// Promote BookList from a component to a container -- it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);