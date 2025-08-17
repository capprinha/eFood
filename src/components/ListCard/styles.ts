import styled from "styled-components";
import { colors } from "../../style";

export const Fundo = styled.div`
    background-color: ${colors.brancoClaro};
`

export const Grid = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr;
    padding-top: 80px;
    padding-bottom: 72px;
    column-gap: 80px;
`