import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {


    onSubmit = (formValues) => {
        // event.preventDefault(); this is called automatically
        console.log(formValues); //This returns an object holding all field values.
        this.props.createStream(formValues) //Access action creator createStream through mapDispatchToProps (but submitted as straight object) and pass in user values.
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


//Passing redux-form into connect function of redux..

export default connect(null, { createStream })(StreamCreate);