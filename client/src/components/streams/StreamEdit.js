import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    //Making StreamEdit work in isolation:

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    //Callback for StreamForm:

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }


    render() {
        //This conditional is necessary because this.props.stream.title is not yet loaded on load.
        if (!this.props.stream) {
            return <div>Loading....</div>
        }
        //initialValues is a special prop name for redux-form--> You can pass in an object as well.
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    initialValues={{
                        title: this.props.stream.title,
                        description: this.props.stream.description
                    }} 
                    onSubmit={this.onSubmit} 
                />
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

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);