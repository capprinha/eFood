import styled from "styled-components";
import { colors } from "../../style";
import {HeaderProps} from '.'

type Props = {
    float: 'esquerda' | 'direita'
}

export const Imagem = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
`
export const Fundo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FundoPerfil = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
`
export const HeaderPerfilText = styled.p<Props>`
    font-size: 18px;
    text-align: ${props => props.float === 'esquerda' ? 'left' : 'right'};
    cursor: ${props => props.float === 'direita' ? 'pointer' : 'default'};
    font-weight: 900;
    color: ${colors.vermelho};
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

export const Logo = styled.img<HeaderProps>`
    margin-top: 64px;
    margin-bottom: ${props => props.type === 'perfil' ? '65px' : '0px'};
`