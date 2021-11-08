import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function CustomInput({ label, placeHolder = "Escribe aquí tu respuesta...", responseOut, value, onKeyPress, error}) {

    return (
        <Wrapper>
            <Label error={error}>
                {label}
            </Label>
            <Input error={error} type="text" placeholder={placeHolder} onChange={event => responseOut(event.target.value)} value={value} onKeyPress={onKeyPress}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
    font-size: 1rem;
    padding-bottom: 1rem;
    color: ${props => props.error ? 'red' : 'black' };
`

const Input = styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid grey;
    color: ${props => props.error ? 'red' : 'black' };

    ::placeholder {
        color: ${props => props.error ? 'red' : 'black' };
    }
`

CustomInput.propTypes = {
    responseOut: PropTypes.func,
    label: PropTypes.string,
    placeHolder: PropTypes.string,
    error: PropTypes.bool,
};