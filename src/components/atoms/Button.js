import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Button({ children, padding = 8, radius = 3, onClick }) {
  return (
    <Wrapper padding={padding} radius={radius} onClick={onClick}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.button`
  margin-top: 1rem;
  padding: ${(props) => props.padding}px calc(${(props) => props.padding}px * 3);
  border-radius: ${(props) => props.radius}px;
  color: rgb(255, 255, 255);
  border-color: transparent;
  background-color: rgb(75, 129, 232);

  &:hover {
    background-color: rgb(55, 95, 173);
  }
`

