import styled from 'styled-components'
import { colors } from '../../style'

export const FundoMobal = styled.div`
    position: fixed;       
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7); 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 36px;
    z-index: 1000;    
    
    @media (max-width: 700px){
            padding: 20px;
        }
`
export const MobalContainer = styled.div`
    width: 100%;
    background-color:${colors.vermelho};
    display: flex;
    padding: 36px;
    position: relative;
        
    @media (max-width: 700px){
            flex-direction: column;
            align-items: center;
            padding: 20px;
            max-width: 90%;
        }
`
export const CloseMobal = styled.img`
    position: absolute;
    top: 8px;
    right: 6px;
    cursor: pointer;
    z-index: 2;

    @media (max-width: 700px){
        top: 4px;
        right: 3px;
    }
`

export const Image = styled.img`
    padding-right: 24px;
    width: 280px;
    height: 280px;
    object-fit: cover;
    
    @media (max-width: 700px){
            padding-right: 0;
            margin-bottom: 8px;
            max-width: 100%
        }
`

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 900;
    color: ${colors.branco};
    
    @media (max-width: 700px){
        text-align: center;
    }
`
export const Description = styled.p`
    line-height: 22px;
    font-size: 14px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 32px;
    color: ${colors.branco};
    
    @media (max-width: 700px){
        font-size: 10px;
        line-height: 16px;
        text-align: justify;
        padding-right: 0px;
    }
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
    
    @media (max-width: 700px){
        font-size: 10px;
        width: 100%;
    }
`