import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    render () {
        return (
            <div>
                React working!!
            </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById("root"));

