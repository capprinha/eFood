import { MobalContainer, Image, Title, Description, Button, CloseMobal,FundoMobal } from './styles'
import fechaMobal from '../../assets/close.png'

import pizza from '../../assets/pizzaMobal.png'
import { useDispatch } from 'react-redux'
import { adicionarItem } from '../../store/reducers/carrinho'

type MobalProps = {
    onClick: () => void
    item: () => void
    title: string | undefined
    descrisao: string | undefined
    porcao: string | undefined
    preco: number | undefined
    image: string | undefined
}
const Mobal = ({onClick, item, title, descrisao, porcao, preco, image}:MobalProps) => {

    
    return(
        <>
        <FundoMobal>
            <div className='container'>
                <MobalContainer>
                    <CloseMobal src={fechaMobal} alt='X' onClick={onClick} />
                    <Image src={image}  />
                    <div>
                        <Title>{title}</Title>
                        <Description>
                            {descrisao}
                            <br/>
                            <br/>
                            Serve: de {porcao}
                        </Description>
                        <Button 
                        onClick={()=> {
                            onClick();
                            item()
                        }} >
                            Adicionar ao carrinho - R$ {preco}
                        </Button>
                    </div>
                </MobalContainer>
            </div>
        </FundoMobal>
        </>

    )
}

export default Mobal