import React from 'react'
import styled from '@emotion/styled';



const InputField = styled.input`
      border: none;
      width: 70vw;
      border-bottom: 2px solid #ffff;
      background-color: rgba(7, 179, 253, 0);
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
      margin: 30px;
      outline: none;
      color: #ffff;
      font-family: 'Poppins-Medium';
      &::placeholder{
            font-size: 14px;
            color: #ffff;
      }
      &:focus{
            border-bottom: 2px solid #93B413;

      }


      @media (min-width: 768px){
            margin: 30px 0px 30px 85px;
            width: 40vw;

            .hide-on-desktop {
                  display: flex;
            }
            .title {
                  color: #FFFF;
            }
           
            .box-container {
                  border: none;
                  border-bottom: 2px solid #FFFF;
                  background-color: rgba(7, 179, 253, 0);
                  justify-content: center;
                  align-items: center;
                  padding-bottom: 10px;
                  margin: 30px;
                  outline: none;
                  color: #FFFF;
                  font-family: 'Poppins-Medium';
            }
      }

      @media (min-width: 992px){
            width: 40vw;
            border-bottom: 2px solid #FFFF;
            margin: 30px 0px 30px 97px;      
      }

      @media (min-width:1200px){
            width: 40vw;
            margin: 30px 0px 50px 125px;
      }

      @media (min-width:1600px){
            width: 40vw;
            margin: 50px 0px 80px 160px;
      }

`;

   type InputProps = {
    type: string;
    name?:string;
    id ?: string;
    placeholder ?: string;
    defaultValue ?: string
}             
function Input(props : InputProps) {
  return (
    <InputField type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.defaultValue ? props.defaultValue:''}/>
  )
}

export default Input