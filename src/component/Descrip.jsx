import React from 'react'
import styled from 'styled-components'

function Descrip() {
    return (
        <>
            <Description>
                <h2>오늘의 하이라이트</h2>
            </Description>
        </>
    )
}

export default Descrip

const Description = styled.div`
    display: flex;
    position: fixed;
    right: 110px;
    top: 120px;
    width: 350px;
    height: 600px;
    background-color: transparent;
    color: white;
`