import styled from "styled-components";
import { colors } from "../../style";

export const Imagem = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
`
export const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Paragrafo = styled.p`
    background-color:  transparent;
    text-align: center;
    font-size: 36px;
    font-weight: 900;
    color: ${colors.vermelho};
    margin-top: 138px;
    padding-bottom: 40px;
`

export const Logo = styled.img`
    margin-top: 64px;
`