import React from "react"
import PropTypes from 'prop-types'
import {useForm, Controller} from "react-hook-form"

Form.propTypes = {
    className: PropTypes.string,
    render: PropTypes.func.isRequired
};

export default function Form(props) {
    const useFormAPI = useForm({mode: "onChange"});
    const {handleSubmit, formState, errors} = useFormAPI;

    const onSubmit = data => props.submitHandler(data);

    const isValidInput = name => (
        formState.dirtyFields.has(name) && errors && errors[name] === undefined
    );

    return (
        <form
            className={props.className ? props.className : null}
            onSubmit={handleSubmit(onSubmit)}>
            {/*  pass methods from react-hook-form & controller & fields validation information and render the props*/}
            {props.render(useFormAPI, isValidInput, Controller)}
        </form>
    );
}