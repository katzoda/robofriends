import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from '../components/Searchbox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // this function is passed to Searchbox component, listens to onchange event and updates state
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    getNewRobots = () => {
        // update robots array based on searchfield value
        const { robots, searchfield } = this.state;
        const newRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return [robots, newRobots];
    }

    //*****************************
    // RENDER
    //*****************************
    render() {
        const robots = this.getNewRobots()[0];
        const filteredRobots = this.getNewRobots()[1];

        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );

    }

}

export default App;