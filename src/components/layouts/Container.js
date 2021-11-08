import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Container({children}) {
    return (
        <Wrapper>
            <WrapperInner>
                {children}
            </WrapperInner>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const WrapperInner = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
`;