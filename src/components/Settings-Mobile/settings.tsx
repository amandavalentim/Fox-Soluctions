// Developed code by Gabriel

'use client'
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';

const SettingsComponents = styled.section `

    // Mobile

    * {
        color: white;
    }

    span {
        font-family: "Poppins-Regular";
    }

    height: 114vh;

    background-color: #2F99BF;

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

    .desktop2 {
        display: none;
    }

    .desktop3 {
        display: none;
    }

    #photo-input {
        display: none;
    }

    .photo {
        margin-left: 15%;
        margin-top: 10%;
        width: 130px;
        height: 130px;
    }

    * {
        font-family: 'Poppins';
    }

    .name {
        margin-left: 10%;
        margin-top: 13%;
        font-size: 1.2em;
    }

    .email {
        margin-left: 10%;
        margin-top: 10%;
        font-size: 1.2em;
    }

    .birthday {
        margin-left: 10%;
        margin-top: 10%;
        font-size: 1.2em;
    }

    .cpf {
        margin-left: 10%;
        margin-top: 10%;
        font-size: 1.2em;
    }

    .country {
        margin-left: 10%;
        margin-top: 10%;
        font-size: 1.2em;
    }

    span {
        font-weight: bold;
    }

    .changePassword {
        background-color: #93B413;
        border: none;
        font-size: 1.5em;
        margin-top: 12%;
        margin-left: 15%;
        border-radius: 19px;
        width: 220px;
        height: 40px;
    }

    .changePassword:active {
        background-color: #86a40f;
        border: none;
        font-size: 1.5em;
        margin-top: 12%;
        margin-left: 15%;
        border-radius: 19px;
        width: 220px;
        height: 40px;
    }

    .deleteAccount {
        background-color: red;
        border: none;
        font-size: 1.5em;
        margin-top: 4%;
        margin-left: 15%;
        border-radius: 19px;
        width: 220px;
        height: 40px;
    }

    .deleteAccount:active {
        background-color: #cf0000;
        border: none;
        font-size: 1.5em;
        margin-top: 4%;
        margin-left: 15%;
        border-radius: 19px;
        width: 220px;
        height: 40px;
    }


    // Tablet
    @media(min-width: 768px) {

        height: 90vh;

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

        .desktop2 {
            display: none;
        }

        .desktop3 {
            display: none;
        }

        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

        .fox {
            margin-top: 10%;
            margin-left: 35%;
            width: 200px;
        }

        h1 {
            font-size: 4em;
            margin-left: 42%;
        }
        p {
            text-align: center;
        }

        span {
            color: #F47216;
        }
    }


    // Small Screens
    @media(min-width: 992px) {

        height: 90vh;

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

        .desktop2 {
            display: none;
        }

        .desktop3 {
            display: none;
        }

        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

        .fox {
            margin-top: 10%;
            margin-left: 40%;
            width: 200px;
        }

        h1 {
            font-size: 4em;
            margin-left: 45%;
        }

        p {
            text-align: center;
            font-size: 1.2em;
        }

        span {
            color: #F47216;
        }
    }

    // Medium Screens
    @media(min-width: 1200px) {

        height: 90vh;

        .mobile {
            display: none;
        }

        .tablet {
            display: none;
        }

        .desktop1 {
            display: none;
        }

        .desktop2 {
            display: block;
            justify-content: space-between;
        }

        .desktop3 {
            display: none;
        }

        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

        .fox {
            margin-top: 5%;
            margin-left: 42%;
            width: 250px;
        }

        h1 {
            font-size: 5em;
            margin-left: 47%;
        }

        p {
            text-align: center;
            font-size: 1.7em;
            margin-left: 2%;
        }

        span {
            color: #F47216;
        }
    }


    // Large Screens
    @media(min-width: 1600px) {

        height: 90vh;

        .mobile {
            display: none;
        }

        .tablet {
            display: none;
        }

        .desktop1 {
            display: none;
        }

        .desktop2 {
            display: none;
        }

        .desktop3 {
            display: block;
            justify-content: space-between;
        }

        background: linear-gradient(180deg, #07B3FD 0%, #0C65C2 100%);

        .fox {
            margin-top: 5%;
            margin-left: 41%;
            width: 250px;
        }

        h1 {
            font-size: 5em;
            margin-left: 45%;
        }

        p {
            text-align: center;
            font-size: 1.9em;
            margin-left: 2%;
        }

        span {
            color: #F47216;
        }
    }

`;

const SettingsPg = function () {
    return (
        <SettingsComponents>
            <nav className='mobile'>
            <form>
                    {/* Profile Photo */}
                    <label>
                    <span className='photo'>
                        <Image className='photo' src="/images/profile-photo2.png" width={100} height={104} alt="profile-photo"/>
                        <input type="file" id='photo-input'/>
                    </span>
                </label>
                {/* User data */}
                    <p className='name'><span>Nome:</span> Seu Nome</p>
                    <p className='email'><span>E-mail:</span><br/> seuemail@gmail.com</p>
                    <p className='birthday'><span>Nascimento:</span> 21/08/2023</p>
                    <p className='cpf'><span>CPF:</span> 000.000.000-00</p>
                    <p className='country'><span>País:</span> Brasil</p>
                    <button type='button' className='changePassword'>
                        Alterar Senha
                    </button>
                    <button type='button' className='deleteAccount'>
                        Excluir Conta
                    </button>
                </form>
            </nav>

            <nav className='tablet'>
                {/* Tablets and Desktops error 404 */}
                <img src="/images/Stella.png" alt="fox" className='fox'/>
                <h1>404</h1>
                <p>Ops... Parece que ocorreu um pequeno erro!<br/> Por favor, <Link href={'/ProfilePage'}>
                <span>clique aqui</span></Link> para voltar para a tela de configurações.</p>
            </nav>

            <nav className='desktop1'>
                {/* Tablets and Desktops error 404 */}
                <img src="/images/Stella.png" alt="fox" className='fox'/>
                <h1>404</h1>
                <p>Ops... Parece que ocorreu um pequeno erro!<br/> Por favor, <Link href={'/ProfilePage'}>
                <span>clique aqui</span></Link> para voltar para a tela de configurações.</p>
            </nav>

            <nav className='desktop2'>
                {/* Tablets and Desktops error 404 */}
                <img src="/images/Stella.png" alt="fox" className='fox'/>
                <h1>404</h1>
                <p>Ops... Parece que ocorreu um pequeno erro!<br/> Por favor, <Link href={'/ProfilePage'}>
                <span>clique aqui</span></Link> para voltar para a tela de configurações.</p>
            </nav>

            <nav className='desktop3'>
                {/* Tablets and Desktops error 404 */}
                <img src="/images/Stella.png" alt="fox" className='fox'/>
                <h1>404</h1>
                <p>Ops... Parece que ocorreu um pequeno erro!<br/> Por favor, <Link href={'/ProfilePage'}>
                <span>clique aqui</span></Link> para voltar para a tela de configurações.</p>
            </nav>
        </SettingsComponents>
    )
}

export default SettingsPg;