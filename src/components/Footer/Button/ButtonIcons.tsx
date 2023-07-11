import React from 'react'
import styled from '@emotion/styled';
import { FaAngleRight } from "react-icons/fa";

const FieldButton = styled.div`
    .angle-right{
        position: absolute;
        top: 1%;
        left: 80%;
        transform: translate(40%, 100%);
        fill: #fff;
    }

    @media(min-width: 450px){
        position: absolute;
        top: 1%;
        left: 90%;
        transform: translate(40%, 100%);
    }

    @media(min-width: 992px){
        display: none;
    }
`;

const Button = function (){
    return(
        <FieldButton>
            <FaAngleRight className='angle-right'/>
        </FieldButton>
    )
}

export default Button