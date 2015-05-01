var React = require('react');
var DefaultLayout = require('./layouts/default');

var HelloMessage = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <div>Vitual currency API</div>
                <hr />
                <p>
                    Is running...
                </p>
            </DefaultLayout>
        );
    }
});

module.exports = HelloMessage;
