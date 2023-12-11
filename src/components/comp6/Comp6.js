import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color:red;
    color:green;
    font-size:20px;
    height:300px;
`;
const StyledButton = styled.button`
    padding:10px 20px;
    font-size:16px;
    background-color:blue;
    color:white;
    
    &:hover{
        background-color:orange;
    }
`;

function Comp6() {
  return (
    <div>
        <h1>Using Styled components</h1>
        <StyledDiv>
            <h2>Hi</h2>
            <button>Click here</button>
            <StyledButton>Select</StyledButton>  
        </StyledDiv>
        <StyledButton>Select</StyledButton>  

        
    </div>
  )
}

export default Comp6