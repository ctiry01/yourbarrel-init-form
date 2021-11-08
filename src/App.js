import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './components/layouts/Container'
import Nav from './components/atoms/Nav'
import { welcomeQuestions, freelancer, initStep, freelanceStep } from './data/questions'
import QuestionBox from './components/molecules/QuestionBox'
import CustomInput from './components/atoms/CustomInput'
import Button from './components/atoms/Button'

function App() {
    const [answers, setAnswers] = useState([]);
    const [objectIndex, setObjectIndex] = useState(1);
    const [bufferInputValue, setBufferInputValue] = useState("");
    const [error, setError] = useState(false);

    const clearBuffer = () => {
        setBufferInputValue("");
    }

    const handleNext = () => {
        if (bufferInputValue.length < 1) {
            setError(true)
        } else {
            setObjectIndex(objectIndex + 1)
            clearBuffer()
        }
    }

    const handleNextWithKey = (event) => {
        if (event && event.key === 'Enter') {
            handleNext()
        }
    }

    const renderAnwers = () => {
        while (objectIndex <= Object.keys(freelancer).length) {
            return (
                <>
                    <CustomInput label={freelancer.[objectIndex]} responseOut={(res) => setAnswers({ ...answers, [freelancer.[objectIndex]]: res }) & setBufferInputValue(res)}
                        value={bufferInputValue}
                        onKeyPress={event => handleNextWithKey(event) & setError(false)}
                        error={error}
                    />
                    <Button onClick={() => handleNext()}>Siguiente [Enter]</Button>
                </>
            )
        }
    }

    return (
        <Wrapper>
            <Nav />
            <InnerWrapper>
                <Container>
                    {Object.keys(answers).length < 1 && <QuestionBox questions={welcomeQuestions} onPress={(answer) => setAnswers({ ...answers, [initStep]: answer })} />}
                    {answers.[initStep] === freelanceStep && renderAnwers()}
                </Container>
            </InnerWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 60vh;
`

const InnerWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export default App;
