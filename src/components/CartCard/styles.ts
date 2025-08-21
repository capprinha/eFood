import styled from "styled-components";
import { colors } from "../../style";

export const CardContainer = styled.div`
    background-color: ${colors.brancoEscuro};
    display: flex;
    position: relative;
    margin-top: 16px;
    margin-left: 8px;
    margin-right: 8px;
`
export const Image = styled.img`
    width: 80px;
    margin-top: 8px;
    margin-left: 8px;
    margin-bottom: 12px;
`

export const Infos = styled.div`
    display: block;
    color: ${colors.vermelho};
    text-align: start;
    margin-left: 8px;
    margin-top: 8px;

    .title{
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }
`
export const Lixeira = styled.img`
    position: absolute;
    right: 8px;
    bottom: 8px;
`

