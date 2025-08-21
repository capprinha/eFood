import { FundoCarrinho, CartContainer, Button, ValorContainer, ButtonContainer } from './styles'

import CartCard from "../CartCard"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removerItem } from '../../store/reducers/carrinho'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type CartProps = {
    onClick?: () => void
}
const Cart = ({onClick}:CartProps) => {

    const itens = useSelector((state: RootReducer) => state.carrinho.itens)
    const valorPizza = 60.90 * itens
    const [ cardAtivo, setCardAtivo] = useState(true)
    const dispatch = useDispatch()
    return(
        <FundoCarrinho>
            <CartContainer>
                {itens === 0 ? (<p className='vazio'>Carrinho vazio</p>)
                :
                (Array.from({length: itens}).map((_,index) =>(
                    cardAtivo && (
                        <CartCard 
                            key={index}
                            onClick={()=> setCardAtivo(false)}
                            onRemove={()=> dispatch(removerItem())}
                        />
                    )
                )))}
                <ValorContainer>
                    <p className='valor'>
                        Valor total
                    </p>
                    {itens === 0 ? (
                        <p className='preco'>R$ 00,00</p>
                    ) : (
                        <p className='preco'>R$ {valorPizza}</p>
                    )}
                </ValorContainer>
                <ButtonContainer>
                    <Button onClick={onClick}>Continuar com a entrega</Button>
                </ButtonContainer>
            </CartContainer>
        </FundoCarrinho>

    )
}

export default Cart