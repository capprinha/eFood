import styled from "styled-components";
import { colors } from "../../style";

export const Fundo = styled.footer`
    background-color: ${colors.brancoEscuro};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`

export const ListLink = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;
`
export const FooterDescription = styled.p`
    color: ${colors.vermelho};
    text-align: center;
    font-size: 10px;
`