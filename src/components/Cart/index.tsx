import { FundoCarrinho, CartContainer, Button, ValorContainer, ButtonContainer } from './styles'

import CartCard from "../CartCard"
import { useState } from 'react'

type CartProps = {
    onClick?: () => void
}
const Cart = ({onClick}:CartProps) => {

    const [ cardAtivo, setCardAtivo] = useState(true)
    return(
        <FundoCarrinho fundo="rgba(0,0,0,0.7)">
            <CartContainer>
                {cardAtivo && <CartCard onClick={() => setCardAtivo(false)} />}
                <ValorContainer>
                    <p className='valor'>
                        Valor total
                    </p>
                    <p className='preco'> R$ 60,90</p>
                </ValorContainer>
                <ButtonContainer>
                    <Button onClick={onClick}>Continuar com a entrega</Button>
                </ButtonContainer>
            </CartContainer>
        </FundoCarrinho>

    )
}

export default Cart