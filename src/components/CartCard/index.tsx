import { CardContainer, Image, Infos, Lixeira } from './styles'

import pizza from '../../assets/pizzaMobal.png'
import lixeira from '../../assets/lixeira.png'

type Props = {
    onClick: () => void
    onRemove: () => void
}
const CartCard = ({onClick,onRemove}:Props) => {

    return(
        <CardContainer>
            <Image src={pizza} alt="Pizza Marguerita" />
            <Infos>
                <h2 className='title'>Pizza Marguerita</h2>
                <span>R$ 60,90</span>
            </Infos>
            <Lixeira 
                onClick={() => {
                    onClick();
                    onRemove()
                }} 
                src={lixeira} alt="Lixeira" />
        </CardContainer>
    )
}

export default CartCard