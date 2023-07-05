import React from 'react'
import styled from '@emotion/styled';



const InputField = styled.input`
    border: none;
    width: 250px;
    border-bottom: 1px solid #FFFF;
    background-color: rgba(7, 179, 253, 0);
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    outline: none;
    color: #FFF;
    font-family: 'Poppins-Medium';

&::placeholder{
    font-size: 15px;
    color: #FFFF;
}
&:focus{
    border-bottom: 3px solid #93B413;

}

@media (min-width: 768px){
      width: 305px;

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
    value ?: string
   }             
function Input(props : InputProps) {
  return (
    <InputField type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} value={props.value ? props.value:''}/>
  )
}

export default Input