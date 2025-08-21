import styled from "styled-components";
import { colors } from "../../style";
import {ListProps} from '.'
export const Fundo = styled.div`
    background-color: ${colors.brancoClaro};
`

export const Grid = styled.div<ListProps>`
    display: grid;
    place-items: center;
    grid-template-columns:${props => props.type === 'home' ? '1fr 1fr': '1fr 1fr 1fr'};
    padding-top: ${props => props.type === 'home' ? '80px' : '56px'};
    padding-bottom: ${props => props.type === 'home' ? '72px' : '88px'};
    column-gap: ${props => props.type === 'home' ? '80px' : '32px'};
    @media (max-width: 700px){
            display: block;
        }
`