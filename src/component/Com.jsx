import React from 'react'
import styled from 'styled-components' 

function Com() {

    return (
        <div>
            <ComsContainer>
                <ComsTitle>응원방</ComsTitle>
            </ComsContainer>
        </div>
    )
}

export default Com

const ComsContainer = styled.div`
    margin-bottom: 50px;
    position: absolute;
    box-sizing: border-box;
    top: 750px;
    left: 130px;
    width: 1280px;
    height: 500px;
    /* background: white; */
`
const ComsTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: black;
`
