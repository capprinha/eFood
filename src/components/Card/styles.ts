import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../style'
import { CardProps } from '.'

type Props = Pick<CardProps , 'type'>

export const CardContainer = styled.div<Props>`
    background-color: ${prop => prop.type === 'home' ? colors.branco : colors.vermelho };
    display: inline-block;
    border: 1px solid ${colors.vermelho};
    width: ${props => props.type === 'home' ? '472px' : '320px' };
    margin-bottom: ${props => props.type === 'home' ? '48px' : '32px'};
    position: relative;
`
export const Image = styled.img<Props>`
    padding-top: ${props => props.type === 'home' ? '0px' : '8px'};
    padding-left: ${props => props.type === 'home' ? '0px' : '8px'};
    padding-right: ${props => props.type === 'home' ? '0px' : '8px'};
`

export const CardList = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 16px;
    margin-left: 8px;
    margin-right: ${props => props.type === 'home' ? '8px' : '0px'};
`
export const Assets = styled.div<Props>`
        display: ${props => props.type === 'home' ? 'flex' : 'none'};
        align-items: center;
        span{
            margin-right: ${props => props.type === 'home' ? '8px' : '0px'};
            color: ${colors.vermelho};
            font-size: 18px;
            font-weight: bold;
        }
`
export const Title = styled.h2<Props>`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.type === 'home' ? colors.vermelho : colors.brancoEscuro};
`

export const Description = styled.p<Props>`
    font-size: 14px;
    color: ${props => props.type === 'home' ? colors.vermelho : colors.brancoEscuro};
    line-height: 22px;
    margin: 0 8px;
    padding-bottom: 16px;
`

export const Button = styled(Link)<Props>`
    display: inline-block;
    text-align: center;
    background-color: ${props => props.type === 'home' ? colors.vermelho : colors.brancoEscuro};
    color: ${props => props.type === 'home' ? colors.brancoEscuro : colors.vermelho};
    padding: ${props => props.type === 'home' ? '4px 6px' : '4px 83px'};
    margin-bottom: 8px;
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    text-decoration: none;
`

export const TagContainer = styled.div`
    position: absolute;
    top: 22px;
    right: 16px;
`
export const Tag = styled.span`
    background-color: ${colors.vermelho};
    color: ${colors.brancoEscuro};
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
    margin-left: 8px;
`