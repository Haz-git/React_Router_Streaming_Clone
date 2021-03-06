import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : '' }`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }


    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
        //We are expecting the parent component to pass in an onSubmit callback for this generalized StreamForm component.
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='title' component={this.renderInput} label='Enter Name'/>
                <Field name='description' component={this.renderInput} label='Enter Description'/>
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = (formvalues) => {

    const errors = {};

    if (!formvalues.title) {
        errors.title = 'Please enter a title!';
    }

    if (!formvalues.description) {
        errors.description = 'Please enter a description!';
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm', //this is the name of the form
    validate
})(StreamForm);