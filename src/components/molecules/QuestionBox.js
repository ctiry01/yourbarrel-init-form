import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SelectBox from '../atoms/SelectBox'
import CustomInput from '../atoms/CustomInput'
import Button from '../atoms/Button'
import { freelancer } from '../../data/questions'


function QuestionBox({ questions, onPress }) {

    const [inputResponse, setInputResponse] = useState('');

    //console.log(Object.keys(questions));

    return (
        <Wrapper>
            {Object.keys(questions).map((key, index) => (
                <SelectGroup key={index}>
                    <SelectBox onClick={() => onPress(key)}>{questions[key]}</SelectBox>
                </SelectGroup>
            ))}
        </Wrapper>

    )
}

const SelectGroup = styled.div`
  padding: 1rem 0;
`

const Wrapper = styled.div`
  padding: 1rem;
`;

QuestionBox.propTypes = {
    questions: PropTypes.array,
    onPress: PropTypes.func
}

export default QuestionBox;