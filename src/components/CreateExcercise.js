import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateExcercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            discription: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount(e) {
        axios.get('http://localhost:5000/users/')
            .then(res => {
                if (res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDiscription(e) {
        this.setState({
            discription: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const excercise = {
            username: this.state.username,
            description: this.state.discription,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(excercise);

        axios.post('http://localhost:5000/excercises/add',excercise)
            .then(res => console.log(res.data))
            .catch(error => console.error(error))
            
         window.location = '/';
    }
    render() {
        return (
            <div>
                <h3>Create New Excecise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name:</label>
                        <select useref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>

                                })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description :</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeDiscription}
                            value={this.state.discription}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Duration (in Munites) :</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeDuration}
                            value={this.state.duration}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Date :</label>
                        <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="create excercise log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}