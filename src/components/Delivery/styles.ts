import styled from "styled-components";
import { colors } from "../../style";

type ButtonProps = {
    fistbutton?: string
}

export const DeliveryContainer = styled.div`
    margin: 0px 8px;
`

export const Title = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.brancoEscuro};
    margin-top: 32px;
    margin-bottom: 16px;
`

export const InputRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;

    label {
        font-size: 14px;
        color: ${colors.brancoEscuro};
        font-weight: bold;
    }

    input {
        background-color: ${colors.brancoEscuro};
        border: none;
        font-size: 14px;
        padding: 8px;
        width: 100%;
    }
`

export const InputGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 34px;
    margin-bottom: 8px;
`

export const Button = styled.button<ButtonProps>`
    width: 100%;
    background-color: ${colors.brancoEscuro};
    color: ${colors.vermelho};
    font-size: 14px;
    font-weight: bold;
    padding: 4px 0;
    text-align: center;
    border: none;
    margin-bottom: 8px;
    margin-top: ${(props) => props.fistbutton || '0'};
`