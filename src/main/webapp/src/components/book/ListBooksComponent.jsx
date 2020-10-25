import React, { Component } from 'react'
import BookDataService from "../../api/BookDataService";
import moment from 'moment'

class ListBooksComponent extends Component{
    constructor(props) {
        super(props)
        this.state = {
            todos : [
                // {id: 1, description: 'Spring Secutiy', targetDate: new Date(), done: false},
                // {id: 2, description: 'Spring Cloud', targetDate:new Date(), done: false},
                // {id: 3, description: 'React', targetDate:new Date(), done: false}
            ], message: null
        }

        this.updateBookClicked = this.updateBookClicked.bind(this)
        this.refreshBookss = this.refreshBookss.bind(this)
        this.addBookClicked = this.addBookClicked.bind(this)
        this.deleteBookClicked = this.deleteBookClicked.bind(this)

    }

    deleteBookClicked(id) {
        BookDataService.deleteBook(id)
            .then(
                response => {
                    this.setState({ message: `Delete of book ${id} Successful` })
                    this.refreshBookss()
                }
            )

    }

    addBookClicked() {
        this.props.history.push(`/books/-1`)
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshBookss();

        console.log(this.state)
    }

    refreshBookss() {
        //let username = AuthenticationService.getLoggedInUserName()
        BookDataService.retrieveAllBooks()
            .then(response => {
                //console.log(response);
                this.setState({todos: response.data})
            })
    }

    updateBookClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/books/${id}/`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )

    }


    render() {
        return(
            <div className="ListTodosComponent">
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>                    
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                    <tr key={todo.id}>                               
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateBookClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteBookClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addBookClicked}>Add</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
}


export default ListBooksComponent