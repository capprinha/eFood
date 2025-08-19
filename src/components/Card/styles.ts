import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../style'

export const CardContainer = styled.div`
    background-color: ${colors.branco};
    display: inline-block;
    border: 1px solid ${colors.vermelho};
    width: 472px;
    margin-bottom: 48px;
    position: relative;
`

export const CardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 16px;
    margin: 0 8px;
    
    div {
        display: flex;
        align-items: center;
        span{
            margin-right: 8px;
            color: ${colors.vermelho};
            font-size: 18px;
            font-weight: bold;
        }
    }
`
export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.vermelho};
`

export const Description = styled.p`
    font-size: 14px;
    color: ${colors.vermelho};
    line-height: 22px;
    margin: 0 8px;
    padding-bottom: 16px;
`

export const Button = styled(Link)`
    display: inline-block;
    background-color: ${colors.vermelho};
    color: ${colors.brancoClaro};
    padding: 4px 6px;
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