// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Input from '../Login/Input/Input';
import Image from 'next/image';

const CreateUserComponent = styled.section `

    // Mobile
    
    .mobile {
        display: block;
        justify-content: space-between;
    }

    .tablet {
        display: none;
    }

    .desktop1 {
        display: none;
    }

    * {
        color: white;
        font-family: 'Poppins-Medium';
    }

    height: 200vh;

    background: linear-gradient(180deg, #0A53B5 0%, #0081E8 100%);

    h1 {
        padding-top: 15%;
        margin-left: 26%;
        font-size: 1.3em;
    }

    form {
        margin-top: 10%;
        margin-left: 9%;
    }

    #name::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 1.1em;
    }

    .gender {
        margin-left: -15%;
        font-family: 'Poppins-Regular';
    }

    .gender-txt {
        font-size: 1.1em;
        margin-top: 8%;
        margin-left: 7%;
        font-family: 'Poppins-Medium';
    }

    .man {
        margin-left: -15%;
    }

    .man-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .woman {
        margin-left: -15%;
    }

    .woman-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .transvestite {
        margin-left: -15%;
    }

    .t1-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .no-binary {
        margin-left: -15%;
    }

    .nb-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .trans {
        margin-left: -15%;
    }

    .t2-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .another {
        margin-left: -15%;
    }

    .a-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .none {
        margin-left: -15%;
    }

    .n-op {
        margin-left: 40%;
        margin-top: -10.5%;
    }

    .social-name {
        margin-top: 7%;
    }

    #social-name::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    Small {
        margin-left: 7%;
    }

    #cpf::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    #email::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    #country::-webkit-input-placeholder {
        font-size: 1.1em;
    }

    .photo {
        display: none;
    }

    .profile-photo {
        margin-top: 5%;
    }

    .choose-a-image {
        margin-top: 3%;
        color: black;
        font-weight: bold;
        background-color: white;
        border: none;
        width: 210px;
        height: 50px;
        align-items: center;
        border-radius: 10px;
    }

    .choose-a-image:active {
        margin-top: 3%;
        color: black;
        font-weight: bold;
        background-color: #ffffffca;
        border: none;
        width: 210px;
        height: 50px;
        align-items: center;
        border-radius: 10px;
    }

    label{
        position: absolute;
        color: black;
        margin-left: 5%;
        top: 1118px;
        font-size: 0.9em;
    }

    .save {
        background-color: #93B413;
        border: none;
        margin-top: 12%;
        margin-left: 18%;
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        border-radius: 19px;
    }

    .save:active {
        background-color: #86a40f;
        border: none;
        margin-top: 12%;
        margin-left: 18%;
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        border-radius: 19px;
    }

    // Tablet
    @media(min-width: 768px) {

        height: 151vh;

        * {
            color: white;
            font-family: 'Poppins-Medium';
        }

        .mobile {
            display: none;
        }

        .tablet {
            display: block;
            justify-content: space-between;
        }

        .desktop1 {
            display: none;
        }

        background: linear-gradient(180deg, #0A53B5 0%, #0A53B5 100%);

        header {
            background-color: #2F99BF;
            height: 200px;
        }

        .search {
            width: 30px;
            height: 30px;
            margin-top: 9%;
            margin-left: 8%;
        }

        .box-1 {
            margin-top: -9.5%;
            margin-left: 20%;
            text-align: center;
            background-color: #0081E8;
            width: 170px;
            height: 130px;
        }

        .amount-documents {
            font-size: 4em;
        }

        .documents {
            margin-top: -10%;
        }

        .box-2 {
            margin-top: -17%;
            margin-left: 50%;
            text-align: center;
            background-color: #F47216;
            width: 170px;
            height: 130px;
        }

        .amount-users {
            font-size: 4em;
        }

        .users {
            margin-top: -10%;
        }

        .profile-photo {
            position: absolute;
            top: 160px;
            margin-left: 79%;
            width: 110px;
            height: 110px;
        }

        #your-name {
            margin-left: 80%;
            margin-top: -3%;
        }

        form {
        margin-top: 5%;
        border-radius: 19px;
        background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
        width: 628px;
        height: 575px;
        border-color: white;
       }

       h1 {
        font-size: 2em;
        margin-left: 31.5%;
        padding-top: 5%;
       }

       .name {
        margin-top: 5%;
        margin-left: -10%;
       }

       #name {
        width: 260px;
       }

       .email {
        margin-top: -42.3%;
        margin-left: 41%;
       }

       #email {
        width: 260px;
       }

       .country {
        margin-top: 0;
        margin-left: 41%;
       }

       #country {
        width: 260px;
       }

       .social-name {
        margin-top: 0;
        margin-left: 41%;
       }

       #social-name {
        width: 260px;
       }

       .birthday {
        margin-top: 0;
        margin-left: 41%;
       }

       #birthday {
        width: 260px;
       }

       .small {
        margin-left: 23%;
        margin-top: -7%;
        font-size: 0.8em;
       }

       .gender {
        margin-top: -10%;
        margin-left: -3.5%;
        font-family: 'Poppins-Regular';
       }

       .man {
        margin-left: -7.5%;
        margin-top: -3%;
        width: 100px;
       }

       .man-op {
        margin-left: 115%;
        margin-top: -50%;
       }

       #masculino {
        width: 30px;
       }

       .woman {
        margin-left: 15%;
        margin-top: -7.7%;
        width: 100px;
       }

       .woman-op {
        margin-left: 115%;
        margin-top: -50%;
       }

       #feminino {
        width: 30px;
       }

       .transvestite {
        margin-left: -7.7%;
        margin-top: -1%;
        width: 100px;
       }

       .t1-op {
        margin-top: -50%;
        margin-left: 116%;
       }

       #t1-op {
        width: 30px;
       }

       .no-binary {
        margin-left: 15%;
        margin-top: -7.7%;
        width: 100px;
       }

       .nb-op {
        margin-left: 115%;
        margin-top: -50%;
        width: 200px;
       }

       #nb-op {
        width: 30px;
       }

       .trans {
        margin-left: -7.7%;
        margin-top: -1%;
        width: 100px;
       }

       .t2-op {
        margin-top: -50%;
        margin-left: 116%;
       }

       #t2-op {
        width: 30px;
       }

       .another {
        margin-left: 15%;
        margin-top: -7.7%;
        width: 100px;
       }

       .a-op {
        margin-left: 115%;
        margin-top: -50%;
        width: 200px;
       }

       #a-op {
        width: 30px;
       }

       .none {
        margin-left: -7.7%;
        margin-top: -1%;
        width: 100px;
       }

       .n-op {
        margin-top: -50%;
        margin-left: 116%;
        width: 200px;
       }

       #n-op {
        width: 30px;
       }

       .cpf {
        margin-top: -12.7%;
        margin-left: -10%;
       }

       #cpf {
        width: 260px;
       }

       .profile-photo2 {
        margin-top: 0;
        margin-left: 3.5%;
       }

       .choose-a-image {
        margin-top: 0;
        margin-left: 3.5%;
        color: black;
        font-weight: bold;
        background-color: white;
        border: none;
        border-radius: 10px;
       }

       .choose-a-image:active {
        margin-top: 0;
        margin-left: 3.5%;
        color: black;
        font-weight: bold;
        background-color: #ffffffca;
        border: none;
        border-radius: 10px;
       }

       label {
        position: absolute;
        top: 906px;
        margin-left: 2%;
       }

       .save-button {
        position: absolute;
        top: 895px;
        background-color: #93B413;
        border: none;
        margin-left: 52%;
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        border-radius: 19px;
       }

       .save-button:active {
        position: absolute;
        top: 895px;
        background-color: #86a40f;
        border: none;
        margin-left: 52%;
        width: 150px;
        height: 50px;
        font-size: 1.5em;
        border-radius: 19px;
       }
    }

    @media(min-width: 922px) {

        .mobile {
            display: none;
        }

        .tablet {
            display: none;
        }

        .desktop1 {
            display: block;
            justify-content: space-between;
        }

        header {
            background-color: #2F99BF;
            height: 250px;
        }

        .search{
            width: 70px;
            height: 70px;
            margin-top: 8%;
        }

        .box-1 {
            margin-top: -12%;
            margin-left: 25%;
            width: 240px;
            height: 180px;
            text-align: center;
        }

        .amount-documents {
            font-size: 5.7em;
        }

        .box-2 {
            margin-top: -17.5%;
            margin-left: 50%;
            width: 240px;
            height: 180px;
            text-align: center;
        }

        .amount-users {
            font-size: 5.7em;
        }

        .profile-photo {
            width: 170px;
            height: 170px;
            margin-top: 3%;
        }

        #your-name {
            font-size: 1.5em;
            margin-top: -2%;
            margin-left: 80.5%;
        }

        form {
            border-radius: 19px;
            background: linear-gradient(180deg, #07B3FD 0%, #0a59c0 100%);
            width: 628px;
            height: 575px;
            border-color: white;
       }
    }
`;

const CreateUserPg = function() {
    return (
        <CreateUserComponent>
            <nav className='mobile'>
                <h1>Criar Usuário</h1>
                <form>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                    </div>
                    <p className='gender-txt'>Gênero</p>
                    <div className='gender'>
                        <div  className='man'>
                            <Input type='radio' name='gender' id='masculino' defaultValue='M'/>
                            <p className='man-op'>Masculino</p>
                        </div>
                        <div  className='woman'>
                            <Input type='radio' name='gender' id='feminino' defaultValue='F'/>
                            <p className='woman-op'>Feminino</p>
                        </div>
                        <div  className='transvestite'>
                            <Input type='radio' name='gender' id='transvestite' defaultValue='T1'/>
                            <p className='t1-op'>Travesti</p>
                        </div>
                        <div className='no-binary'>
                            <Input type='radio' name='gender' id='no-binary' defaultValue='NB'/>
                            <p className='nb-op'>Não Binário</p>
                        </div>
                        <div  className='trans'>
                            <Input type='radio' name='gender' id='trans' defaultValue='T2'/>
                            <p className='t2-op'>Trans</p>
                        </div>
                        <div  className='another'>
                            <Input type='radio' name='gender' id='another' defaultValue='A'/>
                            <p className='a-op'>Outros</p>
                        </div>
                        <div  className='none'>
                            <Input type='radio' name='gender' id='none' defaultValue='N'/>
                            <p className='n-op'>Prefiro não dizer</p>
                        </div>
                    </div>
                    <div className='social-name'>
                        <Input type="string" name="social-name" id="social-name" placeholder='Nome Social'/>
                    </div>
                    <div className='date'>
                        <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                        <small>Digite a data de aniversário</small>
                    </div>
                    <div className='cpf'>
                        <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='Email'/>
                    </div>
                    <div className='country'>
                        <Input type="string" name="country" id="country" placeholder='País'/>
                    </div>
                    <p className='profile-photo'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                        <label>
                            Escolha uma Imagem
                                <span className='photo'>
                                    <input type="file" id='photo-input'/>
                                </span>
                        </label>
                    </div>
                    <button type='button' className='save'>
                        Salvar
                    </button>
                </form>
            </nav>

            <nav className='tablet'>
                <header>
                 <Image className='search' src="/images/search.png" width={100} height={104}  alt="search"/>
                 <div className='box-1'>
                    <p className='amount-documents'>0</p>
                    <p className='documents'>documentos</p>
                 </div>
                 <div className='box-2'>
                    <p className='amount-users'>0</p>
                    <p className='users'>usuários</p>
                 </div>
                 <Image className='profile-photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
                 <p id='your-name'>Seu Nome</p>
                </header>
                <form>
                    <h1>Criar Usuário</h1>
                    <div className='name'>
                        <Input type="string" name="name" id="name" placeholder='Nome Completo'/>
                    </div>
                    <div className='gender'>
                        <p className='gender-txt'>Gênero</p>
                        <div  className='man'>
                            <Input type='radio' name='gender' id='masculino' defaultValue='M'/>
                            <p className='man-op'>Masculino</p>
                        </div>
                        <div  className='woman'>
                            <Input type='radio' name='gender' id='feminino' defaultValue='F'/>
                            <p className='woman-op'>Feminino</p>
                        </div>
                        <div  className='transvestite'>
                            <Input type='radio' name='gender' id='t1-op' defaultValue='T1'/>
                            <p className='t1-op'>Travesti</p>
                        </div>
                        <div className='no-binary'>
                            <Input type='radio' name='gender' id='nb-op' defaultValue='NB'/>
                            <p className='nb-op'>Não Binário</p>
                        </div>
                        <div  className='trans'>
                            <Input type='radio' name='gender' id='t2-op' defaultValue='T2'/>
                            <p className='t2-op'>Trans</p>
                        </div>
                        <div  className='another'>
                            <Input type='radio' name='gender' id='a-op' defaultValue='A'/>
                            <p className='a-op'>Outros</p>
                        </div>
                        <div  className='none'>
                            <Input type='radio' name='gender' id='n-op' defaultValue='N'/>
                            <p className='n-op'>Prefiro não dizer</p>
                        </div>
                    </div>
                    <div className='email'>
                        <Input type="email" name="email" id="email" placeholder='E-mail'/>
                    </div>
                    <div className='country'>
                        <Input type="string" name="country" id="country" placeholder='País'/>
                    </div>
                    <div className='social-name'>
                        <Input type="string" name="social-name" id="social-name" placeholder='Nome Social'/>
                    </div>
                    <div className='birthday'>
                        <Input type='date' name='birthday' id='birthday' placeholder='Data de nascimento'/>
                        <p className='small'>Digite a data de nascimento</p>
                    </div>
                    <div className='cpf'>
                        <Input type="number" name="cpf" id="cpf" placeholder='CPF'/>
                    </div>
                    <p className='profile-photo2'>Foto de Perfil</p>
                    <div className='choose-a-image'>
                        <label>
                            Escolha uma Imagem
                                <span className='photo'>
                                    <input type="file" id='photo-input'/>
                                </span>
                        </label>
                    </div>
                    <button type='button' className='save-button'> 
                        Salvar
                    </button>
                </form>
            </nav>

            <nav className='desktop1'>
                <header>
                    <Image className='search' src="/images/search.png" width={100} height={104}  alt="search"/>
                    <div className='box-1'>
                        <p className='amount-documents'>0</p>
                        <p className='documents'>documentos</p>
                    </div>
                    <div className='box-2'>
                        <p className='amount-users'>0</p>
                        <p className='users'>usuários</p>
                    </div>
                    <Image className='profile-photo' src="/images/profile-photo2.png" width={100} height={104}  alt="profile-photo"/>
                    <p id='your-name'>Seu Nome</p>
                </header>
            </nav>
        </CreateUserComponent>
    )
}

export default CreateUserPg;