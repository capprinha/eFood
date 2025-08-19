import { MobalContainer, Image, Title, Description, Button, CloseMobal,FundoMobal } from './styles'
import fechaMobal from '../../assets/close.png'

import pizza from '../../assets/pizzaMobal.png'

type MobalProps = {
    onClick: () => void
}
const Mobal = ({onClick}:MobalProps) => {

    const valorPizza = 60.90
    return(
        <>
        <FundoMobal fundo="rgba(0,0,0,0.7)">
            <div className='container'>
                <MobalContainer>
                    <CloseMobal src={fechaMobal} alt='X' onClick={onClick} />
                    <Image src={pizza} alt="Pizza" />
                    <div>
                        <Title>Pizza Marguerita</Title>
                        <Description>
                            A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável.
                            Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem.
                            A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. 
                            É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                            <br/>
                            <br/>
                            Serve: de 2 a 3 pessoas
                        </Description>
                        <Button >Adicionar ao carrinho - R$ {valorPizza}</Button>
                    </div>
                </MobalContainer>
            </div>
        </FundoMobal>
        </>

    )
}

export default Mobal