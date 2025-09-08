import { useParams } from 'react-router-dom'
import {Imagem} from '../Header/styles'

import { Title } from './styles'


export type Props = {
    tamanho?: 'small' | 'big'
    titulo: string
    capa: string
    tipo: string
}
const Introduction = ({tipo, titulo, capa}:Props) => {
    const { id } = useParams()
    return(
        <>
            <Imagem style={{backgroundImage: `url(${capa})`}}>
                <div className='container'>
                    <Title tamanho='small'>{tipo}</Title>
                    <Title tamanho='big'>{titulo}</Title>
                </div>
            </Imagem>
        </>
    )
}

export default Introduction