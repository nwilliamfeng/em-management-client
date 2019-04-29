import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding:10px 15px;
    
    display:flex;
    flex-direction:column;
    flex:0 100%;
    align-self:left;

  
`
const HeaderDiv = styled.div`
    display:flex;
    font-size:24px;
`

const BodyDiv = styled.div`

overflow-y:auto;
    width:100%;
    height:100vh;
    background:white;
    width:100;
    margin-top:15px;
    height:100%;
    padding:15px;
    border-width:1px;
    border-color:lightgray;
    border-style:solid;
`


export const withHeader = Component => props => <Container>
    <HeaderDiv>
        {props.title}
    </HeaderDiv>
    <BodyDiv>
        <Component {...props} />
    </BodyDiv>

</Container> 