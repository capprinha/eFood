import { CardContainer, Image, Infos, Lixeira } from './styles'

import pizza from '../../assets/pizzaMobal.png'
import lixeira from '../../assets/lixeira.png'

type Props = {
    image: string
    nome: string
    preco: number
    
    onRemove: () => void
}
const CartCard = ({onRemove,image, preco, nome}:Props) => {

    return(
        <CardContainer>
            <Image src={image} alt={nome} />
            <Infos>
                <h2 className='title'>{nome}</h2>
                <span>R$ {preco}</span>
            </Infos>
            <Lixeira 
                onClick={() => {
                    onRemove()
                }} 
                src={lixeira} alt="Lixeira" />
        </CardContainer>
    )
}

export default CartCard