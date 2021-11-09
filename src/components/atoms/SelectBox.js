import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SelectBox({children, padding = 1.4, onClick}) {
    return (
        <Wrapper padding={padding} onClick={onClick}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: ${(props) => props.padding}rem;
  border: 1px solid #b9b7b7;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0px 0px 51px -30px rgba(0,0,0,0.75);

  &:hover {
    background-color: #f4fbff;
  }
`

SelectBox.propTypes = {
    onClick: PropTypes.func
};