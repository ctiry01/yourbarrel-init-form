import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../layouts/Container'

export default function Nav({}) {
    return (
        <>
            <Container>
                <Wrapper>
                    <img src="https://www.yourbarrel.net/resources/images/logotext-medium.png" alt="logo yourbarrel"/>
                </Wrapper>
            </Container>
            <Underline/>
        </>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0.8rem 0;

  > img {
    max-width: 100%;
    height: 60px;
  }
`

const Underline = styled.div`
  border-bottom: 1px solid #b0b0b0;
`;