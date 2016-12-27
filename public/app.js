import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

var App = React.createClass({
    componentWillMount() {
        axios.get('/api')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    render () {
        return (
            <div>
                React working well!!
            </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById("root"));

