import styled from "styled-components";
import { colors } from "../../style";


export const FundoCarrinho = styled.div`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color:rgba(0,0,0,0.7); 
    padding: 36px;

`
export const Overlay = styled.div`
    height: 100vh;
    width: 100vw;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100vh;
    background-color: ${colors.vermelho};
    display: inline-block;
    padding-top: 16px;
    z-index: 2;
    padding: 0 8px;

    .sucess{
        margin-bottom: 24px;
        color: ${colors.brancoEscuro};
    }

    .vazio{
        color: ${colors.brancoEscuro};
        text-align: center;
    }

    @media (max-width: 700px){
        width: 260px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const Button = styled.button`
    margin: 0px 8px;
    padding: 4px 0px;
    text-align: center;
    width: 100%;
    margin: 0 8px;
    background-color: ${colors.brancoEscuro};
    color: ${colors.vermelho};
    border: none;
    font-size: 14px;
    font-weight: 700;
`

export const ValorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.brancoEscuro};
    margin-top: 40px;
    margin-bottom: 16px;

    .valor{
        margin-left: 8px;
    }
    .preco{
        margin-right: 8px;
    }
`

type ButtonProps = {
    fistbutton?: string
}

export const DeliveryContainer = styled.div`
    margin: 0px 8px;
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.brancoEscuro};
    margin-top: 32px;
    margin-bottom: 16px;
`

export const InputRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;

    label {
        font-size: 14px;
        color: ${colors.brancoEscuro};
        font-weight: bold;
    }

    input {
        background-color: ${colors.brancoEscuro};
        border: none;
        font-size: 14px;
        padding: 8px;
        width: 100%;
    }
`

export const InputGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;
    margin-bottom: 8px;
`

export const Buton = styled.button<ButtonProps>`
    width: 100%;
    background-color: ${colors.brancoEscuro};
    color: ${colors.vermelho};
    font-size: 14px;
    font-weight: bold;
    padding: 4px 0;
    text-align: center;
    border: none;
    margin-bottom: 8px;
    margin-top: ${(props) => props.fistbutton || '0'};
`