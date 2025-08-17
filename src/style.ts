import styled, { createGlobalStyle} from 'styled-components'

export const colors = {
    branco: '#FFFFFF',
    brancoClaro: '#FFF8F2',
    vermelho: '#E66767',
    brancoEscuro: '#FFEBD9'
}

export const Container = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
        
    }
    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`
export const Fundo = styled.div`
    background-color: ${colors.brancoClaro};    

`