import styled from "styled-components";
import { colors } from "../../style";

type Props = {
    fundo: string
}

export const FundoCarrinho = styled.div<Props>`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color:${props => props.fundo || '#000'}; 
    padding: 36px;
    z-index: 1000;
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