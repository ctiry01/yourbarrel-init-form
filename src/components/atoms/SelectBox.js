import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function SelectBox({children, padding = 18, onClick}) {
    return (
        <Wrapper padding={padding} onClick={onClick}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  padding: ${(props) => props.padding}px;
  border: 1px solid #b9b7b7;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
`

SelectBox.propTypes = {
    onClick: PropTypes.func
};