import {Button, DeliveryContainer, InputGroup, InputRow, Title} from './styles'

const Delivery = () => {

    return(
        <DeliveryContainer>
            <Title>Entrega</Title>
            <form>
                <InputRow>
                    <label htmlFor="name">Quem irá receber</label>
                    <input id='name' type="text" />
                </InputRow>
                <InputRow>
                    <label htmlFor="address">Endereço</label>
                    <input id='address' type="text" />
                </InputRow>
                <InputRow>
                    <label htmlFor="city">Cidade</label>
                    <input id='city' type="text" />
                </InputRow>
                <InputGroup>
                    <InputRow>
                        <label htmlFor="cep">CEP</label>
                        <input id='cep' type="number" />
                    </InputRow>
                    <InputRow>
                        <label htmlFor="houseNumber">Número</label>
                        <input id='houseNumber' type="number" />
                    </InputRow>
                </InputGroup>
                <InputRow>
                    <label htmlFor="addOn">Complemento (opcional)</label>
                    <input id='addOn' type="text" />
                </InputRow>
                <Button fistbutton='24px'>Continuar com o pagamento</Button>
                <Button>Voltar para o carrinho</Button>
            </form>
        </DeliveryContainer>
    )
}

export default Delivery