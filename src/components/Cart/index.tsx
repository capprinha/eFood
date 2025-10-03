import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { FundoCarrinho, CartContainer, Button, ValorContainer, ButtonContainer, DeliveryContainer, InputGroup, InputRow, Title, Buton, Overlay } from './styles'

import CartCard from "../CartCard"
import { backMenu, closeCart, removerItem, skipMenu, addCheckout } from '../../store/reducers/carrinho'
import { RootReducer } from '../../store'

const Cart = () => {

    const itens = useSelector((state: RootReducer) => state.carrinho.itens)
    const { cart } = useSelector((state: RootReducer) => state.carrinho)
    
    const valorTotal = itens.reduce((acumulador, item) => acumulador + item.preco, 0)
    const dispatch = useDispatch()
    const [ orderId, setOrderId ] = useState<string | number>('')

    const [ form, setForm] = useState({
        receiver: '',
        description: '',
        city: '',
        zipCode: '',
        number: '',
        complement: '',
        name: '',
        numberCard: '',
        code: '',
        month: '',
        year: ''
    })
    
    const hanbleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value} = e.target
        setForm((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    const hanbleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const checkout = {
            products : itens.map((item) => ({
                id: item.id,
                price: item.preco
            })),
            delivery: {
                receiver: form.receiver,
                address: {
                    description: form.description,
                    city: form.city,
                    zipCode: Number(form.zipCode),
                    number: Number(form.number),
                    complement: form.complement
                }
            },
            payment: {
                card: {
                    name: '',
                    number: Number(form.numberCard).toString(),
                    code: Number(form.code),
                    expires: {
                        month: Number(form.month),
                        year: Number(form.year)
                    }
                }
            }
        }
        dispatch(addCheckout(checkout))
        fetch('https://ebac-fake-api.vercel.app/api/efood/checkout', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(checkout)
        })
        .then(res => res.json())
        .then(res => setOrderId(res.orderId))
    }

    

    if(cart === 0){
        return(
            <FundoCarrinho>
                <Overlay onClick={() => dispatch(closeCart())}></Overlay>
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
                        <Button disabled={valorTotal === 0} onClick={() => dispatch(skipMenu())}>Continuar com a entrega</Button>
                    </ButtonContainer>
                </CartContainer>
            </FundoCarrinho>
        )
    } else if(cart === 1){
        return(
            <FundoCarrinho>
                <CartContainer>
                    <DeliveryContainer>
                        <Title>Entrega</Title>
                        <form>
                            <InputRow>
                                <label htmlFor="receiver">Quem irá receber</label>
                                <input onChange={hanbleChange} value={form.receiver} id='receiver' type="text" />
                            </InputRow>
                            <InputRow>
                                <label htmlFor="description">Endereço</label>
                                <input onChange={hanbleChange} value={form.description} id='description' type="text" />
                            </InputRow>
                            <InputRow>
                                <label htmlFor="city">Cidade</label>
                                <input onChange={hanbleChange} value={form.city} id='city' type="text" />
                            </InputRow>
                            <InputGroup>
                                <InputRow>
                                    <label htmlFor="zipCode">CEP</label>
                                    <input onChange={hanbleChange} value={form.zipCode} id='zipCode' type="number" />
                                </InputRow>
                                <InputRow>
                                    <label htmlFor="number">Número</label>
                                    <input onChange={hanbleChange} value={form.number} id='number' type="number" />
                                </InputRow>
                            </InputGroup>
                            <InputRow>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                <input onChange={hanbleChange} value={form.complement} id='complement' type="text" />
                            </InputRow>
                            <Buton onClick={() => dispatch(skipMenu())} fistbutton='24px'>Continuar com o pagamento</Buton>
                            <Buton onClick={() => dispatch(backMenu())}>Voltar para o carrinho</Buton>
                        </form>
                    </DeliveryContainer>
                </CartContainer>
            </FundoCarrinho>
        )
    } else if(cart === 2){
        return( 
            <FundoCarrinho>
                <CartContainer>
                    <DeliveryContainer>
                        <Title>Pagamento - Valor total R$ {valorTotal}</Title>
                        <form>
                            <InputRow>
                                <label htmlFor="name">Nome do cartão</label>
                                <input onChange={hanbleChange} value={form.name} id='name' type="text" />
                            </InputRow>
                            <InputGroup>
                                <InputRow>
                                    <label htmlFor="numberCard">Número do cartão</label>
                                    <input onChange={hanbleChange} value={form.numberCard} id='numberCard' type='number' />
                                </InputRow>
                                <InputRow>
                                    <label htmlFor="code">CVV</label>
                                    <input onChange={hanbleChange} value={form.code} id='code' type="number" />
                                </InputRow>
                            </InputGroup>
                            <InputGroup>
                                <InputRow>
                                    <label htmlFor="month">Mês de vencimento</label>
                                    <input onChange={hanbleChange} value={form.month} id='month' type='number' />
                                </InputRow>
                                <InputRow>
                                    <label htmlFor="year">Ano de vencimento</label>
                                    <input onChange={hanbleChange} value={form.year} id='year' type="number" />
                                </InputRow>
                            </InputGroup>
                            <Buton fistbutton='24px' onClick={(e) => {hanbleSubmit(e),dispatch(skipMenu())}}>Finalizar pagamento</Buton>
                            <Buton >Voltar para a edição de endereço</Buton>
                        </form>
                    </DeliveryContainer>
                </CartContainer>
            </FundoCarrinho>
        )
    } else if(cart === 3) {
        return(
            <FundoCarrinho>
                <CartContainer>
                    <Title>Pedido realizado - {orderId}</Title>
                    <p className='sucess'>
                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
                    </p>
                    <p className='sucess'>
                        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
                    </p>
                    <p className='sucess'>
                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
                    </p>
                    <p className='sucess'>
                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                    </p>
                    <Button onClick={() => dispatch(closeCart())}>Concluir</Button>
                </CartContainer>
            </FundoCarrinho>
        )
    }
    
}

export default Cart