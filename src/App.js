import React, { useState } from 'react'
import styled from 'styled-components'
import Container from './components/layouts/Container'
import Nav from './components/atoms/Nav'
import { welcomeQuestions, freelancer, initStep, freelanceStep, themeParkStep, tirolina, tirolinaStep, agencyStep, ziplineStep, extremeSportsStep, eventsStep, otherStep } from './data/questions'
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
                    <CustomInput label={freelancer[objectIndex]} responseOut={(res) => setAnswers({ ...answers, [freelancer[objectIndex]]: res }) & setBufferInputValue(res)}
                        value={bufferInputValue}
                        onKeyPress={event => handleNextWithKey(event) & setError(false)}
                        error={error}
                    />
                    <Button onClick={() => handleNext()}>Siguiente [Enter]</Button>
                </>
            )
        }
        console.log(JSON.stringify(answers))
        return (
            <Container>
                <WrapperMsgDone>
                    <h3>Gracias por rellenar el formulario, en breves nos pondremos en contacto.</h3>
                    <a href="https://www.yourbarrel.io/">Yourbarrel.io</a>
                </WrapperMsgDone>
            </Container>
        )
    }

    return (
        <>
            <Nav />
            <InnerWrapper>
                <Container>
                    {Object.keys(answers).length < 1 && <QuestionBox questions={welcomeQuestions} onPress={(answer) => setAnswers({ ...answers, [initStep]: answer })} />}
                    {answers[initStep] === freelanceStep && renderAnwers()}
                    {answers[initStep] === agencyStep && renderAnwers()}
                    {answers[initStep] === ziplineStep && renderAnwers()}
                    {answers[initStep] === extremeSportsStep && renderAnwers()}
                    {answers[initStep] === eventsStep && renderAnwers()}
                    {answers[initStep] === themeParkStep && renderAnwers()}
                    {answers[initStep] === otherStep && renderAnwers()}
                </Container>
            </InnerWrapper>
        </>
    );
}

const InnerWrapper = styled.div`
    min-height: 60vh;
    display: flex;
    align-items: center;
`

const WrapperMsgDone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    > h3 {
        text-align: center;
        margin-bottom: 5rem;
    }

    > a {
        font-weight: bold;
        text-decoration: none;
        padding: 1rem;
        background-color: rgb(75, 129, 232);
        color: white;
        border-radius: 12px;
        
        &:hover {
            text-decoration: underline;
        }
    }
`

export default App;
