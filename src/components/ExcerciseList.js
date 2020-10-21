import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Excercise = props => (
    <tr>
        <td>{props.excercise.username}</td>
        <td>{props.excercise.description}</td>
        <td>{props.excercise.duration}</td>
        <td>{props.excercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.excercise._id}>edit</Link> | <Link to="/" onClick={ () => {props.deleteExcercise(props.excercise._id) }}>delete</Link>
        </td>
    </tr>
)

export default class ExcerciseList extends Component {


    constructor(props) {
        super(props);

        this.deleteExcercise = this.deleteExcercise.bind(this);

        this.state = { excercises: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/excercises/')
            .then(responce => {
                this.setState({ excercises: responce.data })
            })
            .catch(error => console.log(error));
    }

    deleteExcercise(id) {
        axios.delete('http://localhost:5000/excercises/' + id)
            .then(res => console.log(res.data));

        this.setState({
            excercises: this.state.excercises.filter(el => el._id !== id)
        })
    }

    excerciceList() {
        return this.state.excercises.map(currentExcercices => {
            return <Excercise excercise={currentExcercices} deleteExcercise={this.deleteExcercise} key={currentExcercices._id} />;
        })
    }

    render() {
        return (
            <div className="container">
                <h3>List Excercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>User Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.excerciceList() }
                    </tbody>
                </table>
            </div>
        );
    }
}
