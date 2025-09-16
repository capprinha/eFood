import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { FundoCarrinho, CartContainer, Button, ValorContainer, ButtonContainer } from './styles'

import CartCard from "../CartCard"
import { removerItem } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'

type CartProps = {
    onClick?: () => void
}
const Cart = ({onClick}:CartProps) => {

    const itens = useSelector((state: RootReducer) => state.carrinho.itens)

    const valorTotal = itens.reduce((acumulador, item) => acumulador + item.preco, 0)

    const dispatch = useDispatch()

    return(
        <FundoCarrinho>
            <CartContainer>
                {itens.length === 0 ? (<p className='vazio'>Carrinho vazio</p>)
                : (
                    itens.map(item => (
                        <CartCard key={item.id} 
                            image={item.foto}
                            nome={item.nome}
                            preco={item.preco}
                            onRemove={() => dispatch(removerItem(item.id))}    
                        />
                    ))
                )
                }
                <ValorContainer>
                    <p className='valor'>
                        Valor total
                    </p>
                    {itens.length === 0 ? (
                        <p className='preco'>R$ 00,00</p>
                    ) : (
                        <p className='preco'>R$ {valorTotal}</p>
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