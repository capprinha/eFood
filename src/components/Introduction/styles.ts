import styled from "styled-components";
import { colors } from "../../style";
import {Props} from '.'

type StyledProps = Omit<Props, 'tipo' | 'titulo' | 'capa'>
export const Title = styled.h2<StyledProps>`
    font-size: 32px;
    padding-top: ${props => props.tamanho === 'small' ? '25px' : '0px'};
    padding-bottom: ${props => props.tamanho === 'small' ? '0px' : '32px'};
    margin-top: ${props => props.tamanho === 'small' ? '0px' : '156px' };
    font-weight: ${props => props.tamanho === 'small' ? '100' : '900' };
    color: ${colors.branco};
`
