var React = require('react');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <html>
                <head>
                    <title>Error</title>
                </head>
                <body>
                    <h1>Error</h1>
                    <hr />
                    <p>{this.props.message}</p>
                </body>
            </html>
        );
    }
});

module.exports = HelloMessage;
