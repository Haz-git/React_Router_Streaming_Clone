import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    //Making StreamEdit work in isolation:

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }


    render() {
        //This conditional is necessary because this.props.stream.title is not yet loaded on load.
        if (!this.props.stream) {
            return <div>Loading....</div>
        }

        return (
            <div>
                {this.props.stream.title}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return {
        //Select appropriate stream out of props
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);