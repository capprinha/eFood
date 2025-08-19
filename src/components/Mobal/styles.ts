import styled from 'styled-components'
import { colors } from '../../style'

type MobalProps = {
    fundo: string
}
export const FundoMobal = styled.div<MobalProps>`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.fundo || '#000'}; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px;
    z-index: 1000;    
`
export const MobalContainer = styled.div`
    max-width: 100%;
    background-color:${colors.vermelho};
    display: flex;
    padding: 36px;
    position: relative;
`
export const CloseMobal = styled.img`
    position: absolute;
    top: 8px;
    right: 6px;
    cursor: pointer;
    z-index: 2;
`

export const Image = styled.img`
    padding-right: 24px;
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 900;
    color: ${colors.branco};
`
export const Description = styled.p`
    line-height: 22px;
    font-size: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 32px;
    color: ${colors.branco};
`

export const Button = styled.button`
    padding: 4px 7px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    background-color: ${colors.brancoEscuro};
    color: ${colors.vermelho};
    border: none;
    cursor: pointer;
`