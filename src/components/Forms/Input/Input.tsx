import React from 'react'
import styled from '@emotion/styled';



const InputField = styled.input`
      border: none;
      width: 230px;
      border-bottom: 2px solid #000;
      background-color: rgba(7, 179, 253, 0);
      justify-content: center;
      align-items: center;
      padding-bottom: 10px;
      margin: 30px;
      outline: none;
      color: #000;
      font-family: 'Poppins-Medium';

&::placeholder{
      font-size: 14px;
      color: #000;
}
&:focus{
      border-bottom: 2px solid #93B413;

}

@media (min-width: 768px){

      .hide-on-desktop {
            display: flex;
      }
      .title {
        color: #FFFF;
    }
      width: 305px;
      .box-container {
            border: none;
            width: 230px;
            border-bottom: 2px solid #FFFF;
            background-color: rgba(7, 179, 253, 0);
            justify-content: center;
            align-items: center;
            padding-bottom: 10px;
            margin: 30px;
            outline: none;
            color: #FFFF;
            font-family: 'Poppins-Medium';
            &::placeholder{
                  font-size: 14px;
                  color: #FFFF;
            }
      }
}

@media (min-width: 992px){
      width: 325px;
      border-bottom: 2px solid #FFFF;
                
}

@media (min-width:1200px){
      width: 310px;
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